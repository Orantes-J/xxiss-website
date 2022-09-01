from ast import If
from cgi import test
from hashlib import new
from datetime import datetime
import datetime
import math
from multiprocessing import context
from pyexpat import model
from random import random
import re
from django.shortcuts import render, redirect
from django.contrib import messages
from smtplib import SMTPResponseException
import smtplib
import uuid

import numpy as np

# from helper import addOns

# GENERATE RANDOMM NUMBER
# def Convert(string):
#     list1 = []
#     print(string)
#     list1[:0] = string
#     return list1
# str = uuid.uuid1()
# print('*'*50)
# print(Convert(str))
# print('*'*50)

# DATABASE CONNECTION
import mysql.connector
from requests import session

trailers  = [
    {
        "model" : 'The Roamer',
        "location" : 'Florida',
        "size" : 'null',
        "d_payment" : 3000,
        "r_payment" : 4000,
        "total" : 7000
    },

    {
        "model" : 'The Grizzly',
        "location" : 'Colorado',
        "size" : [5, 10],
        "d_payment" : 3000,
        "r_payment" : 4000,
        "total" : 7000
    },
    
    {
        "model" : 'Spartan',
        "location" : 'Florida',
        "size" : 'null',
        "d_payment" : 3000,
        "r_payment" : 4000,
        "total" : 7000
    }
]

addOns = [
    {
        "color" : ['Coyote Brown', 'Charcoal', 'Navy Blue'],
        "size" : ['4ft x 8ft', '5ft x 8ft', '5ft x 10ft'],
        "axle" : [
            [{"model" : 'Heavy Duty 3500lb', "desc": 'Axle with Leaf Spring Suspension Rockwell', "price" : 515}],
            [{"model" : 'Timbren Heavy Duty', "desc": 'Axle-less off road 4" lift 3,500lb', "price" : 1225}],
        ],
        "frontJacks" : {"item" : 'Front Jacks', "price" : 150},
        "waterTank" : {"item" : 'Water Tank Trailer Mount', "desc":'18 Gallon', "price" : 500},
        "camplux" : {"item" : 'Camplux 2.64 gpm', "desc" : 'Battery operated, Propane tankless Water Heater & Shower W/pump', "price" : 500},
        "windows" :{"item" : 'Blackout Insulated Window Covers', "price" : 325},
        "solarPanels" : {"item" : 'Renogy 100 Watt', "desc" : 'Monocrystalline Solar Panel with PWM controller', "price" : 300},
        "fridges" : {"item" : 'Dometic Fridge/Freezer 80L', "price" : 300},
        "stoves" : {"item" : 'Stove w/ Propane Tank', "price" : 550},
        "awning" : {"item" : 'Nomadic Awning 270', "price" : 850},
        "tongueBox" : {"item" : 'TS Tongue Box', "price" : 250},
        "brakes" : {"item" : 'Electric Brakes', "price" : 400},
        "maxCoupler" : {"item" : 'Max Coupler Articulating Hitch', "price" : 400},
        "dc2dc" : {"item" : ' DC to DC Tow Charger', "price" : 250},
        "maxxFan" : {"item" : '10 Speed Maxx Fan with Remote', "price" : 350},
        "jack" : {"item" : 'Wheeled Tongue Jack', "price" : 400},
        "roofRack" : {"item" : 'Cross bars required for roof rack', "price" : 250},
        "arksenRoofRacks" : [
            [{"size" : 30, "price" : 199}],
            [{"size" : 43, "price" : 249}],
            [{"size" : 64, "price" : 279}],
        ],
    }
]

xxiss_cnx = mysql.connector.connect(
    user = 'root', 
    password = 'root',
    database = 'xxiss'
)


cursor = xxiss_cnx.cursor()

query = ("SELECT * FROM admins")
cursor.execute(query)
all_admin = cursor.fetchall()

main_admin = all_admin[0]

pract_item = {
    'name' : 'Trailer One',
    'price' : 200,
    'tax' : 2.50,
    'paid' : False
}

set_salt = 'isua&(*23*(><63hao'

def under_construction(request):
    return render(request, 'uLanding.html')
def contact_u(request):
    if request.method == 'POST':
        user_email = request.POST.get('f-name')
        try:
            sql = "INSERT INTO u_contact_back(email) VALUES (%s)"
            val = (user_email)
            cursor.execute(sql, val)
            xxiss_cnx.commit()
            print(cursor.rowcount, 'record inserted')
            return redirect('/')
        except mysql.connector.Error as err: 
            print('Something went wrong: {}'.format(err))
            return redirect('/')

def nav_bar_set(request):
    context = {
        'user' : request.session['user_id']
    }
    return render(request, 'navbar.html', context)

def index(request):
    logged_user = []
    try:
        user = request.session['user_id']
        hey = cursor.execute(f'SELECT * FROM customers WHERE id = {request.session["user_id"][0]}')
        fetch_logged = cursor.fetchall()

        for i in fetch_logged:
            logged_user.append(i)

        context = {
            'user' : logged_user
        }
        return render(request, 'index.html', context)
    except:
        return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def specs(request, id, rv):
    liits = []
    for i in trailers[id-1].values():
        liits.append(i)
    print(liits)
    context = {
        'rvs' : liits,
        'addons' : addOns
    }

    return render(request, 'specs.html', context)

def products(request):
    logged_user = []
    try: 
        exact_user = cursor.execute(f'SELECT * FROM customers WHERE id = {request.session["user_id"][0]}')
        fetch_logged = cursor.fetchall()
        for i in fetch_logged:
            logged_user.append(i)
        context = {
            'addons' : addOns,
            'user' : logged_user
        }
        return render(request, 'products.html', context)
    except:
        return render(request, 'products.html')

def byoTrailer(request):
    return render(request, 'byotrailer.html')

# CHARGE ONLINE PAYMENTS ALGO
def test_charge(request):
    print('*'*50)
    print(pract_item['price'] + pract_item['tax'])
    pract_item['paid'] = True
    print(pract_item['paid'])
    print('*'*50)
    
    return redirect('/')

def customer_reg_form(request):
    return render(request, 'customerForm.html')

# CUSTOMER SUPPORT FORM - SUBMIT 

# HIDE THIS INFORMATION AFTER

def customer_suprt(request):
    if request.method == "POST":
        customer_name = request.POST.get('f-name')
        customer_phone = request.POST.get('f-phone')
        customer_email = request.POST.get('f-email')
        customer_msg = request.POST.get('f-textarea')
        customer_trailer_choice = request.POST.get('selected-item')

        # ALGORITHM TO FIND SLEECTED ITEM WHICH HAS ATTRIBUTE OF TRUE

        # EMAIL INFORMATION TO SELF - CREATE CONNETION VIA GMAIL SERVER
        try:
            sql = "INSERT INTO request_quotes(client_name, client_phone, client_email, client_msg, client_trailer_req) VALUES (%s, %s, %s, %s, %s)"
            val = (customer_name, customer_phone, customer_email, customer_msg, customer_trailer_choice)
            cursor.execute(sql, val)
            xxiss_cnx.commit()
            print(cursor.rowcount, 'record inserted')
            return redirect('/')
        except error_code == "500":
            print('error 500 caught')
            return redirect('/')
        except SMTPResponseException as e:
            error_code = e.smtp_code
            error_message = e.smtp_error
            print('something went wrong with email function ', error_message)
            return redirect('/')
    else:
        print('went to else statement')
        return redirect('/')

# CUSTOMER LOGIN
customer_test = {
    'name' : 'Juan',
    'pass' : 'test'
}

def reg_warranty(request):
    return render(request, 'wform.html')

def customer_login_page(request):
    return render(request, 'customerlogin.html')

def customer_sign_up(request):
    return render(request, 'signUp.html')

def customer_request_dash(request):
    if request.session['user_id']:
        curr_user = request.session['user_id']
        logged_user = curr_user
        try:
            # QUERY ORDERS THAT BELONG TO CUSTOMER PASS INTO CONTEXT
            cursor.execute(f"SELECT * FROM quick_order WHERE customer_id = '{curr_user[0]}'")
            customer_orders = []
            customer_order = cursor.fetchall()
            for i in customer_order:
                customer_orders.append(i)

            if the_list:
                context = {
                    'logged_user' : logged_user,
                    'cust_orders' : customer_orders
                }
                return render(request, 'customerdash.html', context)
            else:
                the_list = ['the list is empty', 'You have no current orders']
                context = {
                'logged_user' : logged_user,
                'cust_orders' : customer_orders
            }
            return render(request, 'customerdash.html', context)
        except:
            context = {
                'logged_user' : logged_user,
                'cust_orders' : customer_orders
            }
            return render(request, 'customerdash.html', context)
    else:
        return redirect('/')

def customer_dash(request):
    if request.method == "POST":
        cust_email = request.POST.get('email')
        cust_pass = request.POST.get('customerpassword')
        try:
            cursor.execute(f"SELECT * FROM customers WHERE customer_email = '{cust_email}'")
            atmpt_info = cursor.fetchall()
            print(atmpt_info, 'atmpt var line 242')
            print('*'*60)
            # CUSTOMER NOW LOGGED IN
            if  atmpt_info[0][2] == f'{cust_pass}{set_salt}': 
                # CREATE SESSION
                logged_user = []
                try:
                    for i in atmpt_info:
                        logged_user.append(atmpt_info[0])
                    request.session['user_id'] = atmpt_info[0]
                    print('now logging in line 248')
                    return redirect('/return-to-dash')
                except:
                    return redirect('/customer-login-page')
            else:
                messages.error(request, 'password does not match')
                return redirect('/customer-login-page')
        except:
            messages.error(request, 'username or password does not match')
            return redirect('/customer-login-page')
    else:
        return redirect('/')
def customer_new(request):
    # CREATING CUSTOMERS
    if request.method == 'POST':
        cust_name = request.POST.get('signupusername')
        cust_email = request.POST.get('signemail')
        cust_pass = request.POST.get('signuppassword')
        hashed_pw = f'{cust_pass}{set_salt}'

        # CREATE CUSTOMER AND ADD TO DB
        try:
            sql = "INSERT INTO customers(customer_uname, customer_pass, customer_email) VALUES (%s, %s, %s)"
            val = (cust_name, hashed_pw, cust_email)
            cursor.execute(sql, val)
            xxiss_cnx.commit()
            print(cursor.rowcount, 'record inserted')

        # CREATE CUSTOMER SESSION
            cursor.execute(f"SELECT * FROM customers WHERE customer_email = '{cust_email}'")
            atmpt_info = cursor.fetchall()
            logged_user = []
            for i in atmpt_info:
                logged_user.append(atmpt_info[0])
            request.session['user_id'] = atmpt_info[0]
            return  redirect('/return-to-dash')

        except mysql.connector.Error as err: 
            print('Something went wrong: {}'.format(err))
            return redirect('/customer-login-page')
    else:
        return redirect('/')

def customer_logout(request):
    request.session.flush()
    print(session)
    return redirect('/')

def customer_quick_order(request):
    if request.method == 'POST' and request.session['user_id']:

        # CREATING UNIQUE ORDER NUM HERE
        test_item = uuid.uuid1().int
        order_num = [int(i)  for i in str(test_item)]
        next_order_num = [str(order_num[i]) for i in range(6)]
        o_num = ''.join(next_order_num)
        rv_model = request.POST.get('rvmodel')
        rv_floor_plan = request.POST.get('rvfloorplan')
        rv_color = request.POST.get('rvcolor')

        print('*'*50)
        print(f'this is o_num -> {o_num}, {type(o_num)}')
        print(f'this is rv_model -> {rv_model} {type(rv_model)}')
        print(f'this is rv_color -> {rv_color} {type(rv_color)}')
        print(f'this is rv_floorplan -> {rv_floor_plan} {type(rv_floor_plan)}')
        print('*'*50)

        context = {
            'onum' : o_num,
            'rvmodel' : rv_model,
            'rvcolor' : rv_color,
            'rvfloorplan' : rv_floor_plan
        }

        # IF NO USER IS DETECTED THEN REDIRECT TO HOME
        return render(request, 'receipt.html', context=context)
    else:
        return redirect('/')

def process_quick_order(request):
    if request.method == 'POST':
        curr_user = request.session['user_id'][0]
        cust_card_num = request.POST.get('card-number')
        cust_card_name = request.POST.get('card-holder')
        cust_card_exp = request.POST.get('card-exp')
        cust_card_cvv = request.POST.get('card-cvv')

        # FETCHED ITEMS FOR QUICK ORDER
        order_num = request.POST.get('rvonum')
        rvmodel = request.POST.get('rvmodel')
        rvcolor = request.POST.get('rvcolor')
        rvfloorplan = request.POST.get('rvfloorplan')
        print(type(request.session['user_id']))
        # COMMIT TO MYSQL
        sql = "INSERT INTO quick_order(rv_model, floor_plan, color, customer_id, order_number) VALUES (%s, %s, %s, %s, %s)"
        val = (rvmodel, rvfloorplan, rvcolor, curr_user, order_num)
        cursor.execute(sql, val)
        xxiss_cnx.commit()
        print(cursor.rowcount, 'record inserted')

        messages.success(request, 'Your order has been processed, thank you for your business.')
        return redirect('/return-to-dash')
    else:
        messages.error(request, 'Something Went Wrong')
        return redirect('/')

def make_payment_from_dash(request):
    name = request.POST.get('card-holder')
    card_num = request.POST.get('card-number')
    card_exp = request.POST.get('card-exp')
    card_cvv = request.POST.get('card-cvv')

    # block above works 


    return redirect('/return-to-dash')

def add_to_receipt(request, pur_items):

    # list_of_add = {
    # "add1" : request.POST.get('add-1'),
    # "add2" : request.POST.get('add-2'),
    # "add3" : request.POST.get('add-3'),
    # "add4" : request.POST.get('add-4'),
    # "add5" : request.POST.get('add-5'),
    # "add6" : request.POST.get('add-6'),
    # "add7" : request.POST.get('add-7'),
    # "add8" : request.POST.get('add-8'),
    # "add9" : request.POST.get('add-9'),
    # "add10" : request.POST.get('add-10'),
    # "add11" : request.POST.get('add-11'),
    # "add12" : request.POST.get('add-12'),
    # "add13" : request.POST.get('add-13'),
    # "add14" : request.POST.get('add-14'),
    # "add15" : request.POST.get('add-15'),
    # "add16" : request.POST.get('add-16'),
    # }
    print('*'*50)
    print(f'this is purchased items -> {pur_items}')
    print('*'*50)

    return redirect('/order-receipt')


def byo_trailer_order(request):
    if request.method == 'POST':
        testing_1 = request.POST.get('p-1')
        print('function byo trailer ran', testing_1, 'tested')
        return redirect('/build-your-own-trailer')

def customer_create_order(request, prod_id):
    if request.method == "POST":

        # FETCTCHING ID IF THERE IS A SIGNED IN ACCOUNT 
        customer_id = request.session['user_id']

        # THREE FIELDS ARE ONLY REQUIRED TO MAKE A NEW ORDER - ADD PROPER TIME STAMP
        sql = "INSERT INTO order(order_number, product_id_1, customer_id)"
        val = (1, prod_id, customer_id)
        xxiss_cnx.commit()

        return redirect('/order-receipt')
    # ELSE STATEMENT IF THERE IS NO USER
    else:
        # ADD A POP UP WINDOW THAT EXPLAINS WENT WRONG
        return redirect('/')

    return redirect('/order-receipt')

def admin_login_page(request):
    return render(request, 'adminlogin.html')

# CUSTOMER MESSAGES POST METHOD
def see_messages(request):
    query = ("SELECT * FROM request_quotes")
    cursor.execute(query)
    all_msgs = cursor.fetchall()
    context = {
        'messages' : all_msgs
    }
    return render(request, 'messages.html', context)

# CUSTOMER MESSAGES DELETE METHOD(ADMIN-PANEL)
def admin_delete_msg(request, id):
    query = f"DELETE FROM request_quotes WHERE id = {id}"
    cursor.execute(query)
    xxiss_cnx.commit()
    print(f'this is the id that was passed as param {id}')
    return redirect('/check-messages')


def admin_sign_in(request):
    if request.method == "POST":
        fetched_name = request.POST.get('adminusername')
        fetched_pass = request.POST.get('adminpassword')
        if fetched_name == main_admin[1] and fetched_pass == main_admin[2]:
            # FETCHING ALL QUOTES/MESSAGES FROM CUSTOMER DB
            context = {
                'admin' : main_admin[1]
            }
            return render(request, 'admindash.html', context)
        else:    
            return redirect('/')

def admin_dash(request):
    admin_list = list(main_admin)
    if request.method == "GET" and len(admin_list) == 0:
        return redirect('/')
    else:
        # FETCHING ALL NEW ORDERS
        cursor.execute(f"SELECT * FROM quick_order WHERE order_status = 'new order' ")
        new_orders = cursor.fetchall()

        # FETCHING ALL PROCESSING ORDERS
        cursor.execute(f"SELECT * FROM quick_order WHERE order_status = 'processing' ")
        process_orders = cursor.fetchall()
        print(f"this is the fetched data via line 497 {process_orders}")

        # FETCHING ALL COMPLETED ORDERS
        cursor.execute(f"SELECT * FROM quick_order WHERE order_status = 'complete' ")
        completed_order = cursor.fetchall()


        print(datetime.datetime.strptime(completed_order[0][8], "%d %m %y %H:%M"))
    

        print('this is line 526', completed_order)


        # 
        query = ("SELECT * FROM request_quotes")
        cursor.execute(query)
        all_msgs = cursor.fetchall()

        context = {
            'admin' : main_admin[1],
            'messages' : all_msgs,
            'neworders' : new_orders,
            'processingorder' :  process_orders,
            'completedorders' : completed_order
        }
        return render(request, 'admindash.html', context)

def admin_create_order(request):
    if request.method == 'POST':
        
    # GRAB ALL INFORMATION
        fetched_email = request.POST.get('admin-custom-em')
        fetched_rv_model = request.POST.get('admin-custom-name')
        fetched_rv_color = request.POST.get('admin-custom-color')
        fetched_rv_flr_plan = request.POST.get('admin-custom-plan')
        fetched_custom_price = request.POST.get('admin-custom-price')

        # GRABBED COMPLETED YOU CREATE ORDER WITH VARS
    
    else:
        # DISPLAY AN ERROR MESSAGE
        return redirect('/admin-dash')

def admin_logout(request):
    request.session.flush()
    return redirect('/')

def admin_search_ord_num(request):
    if request.method == "POST":
        fetched_ord_num = request.POST.get('search-in')
        # CONVERT FETCHED ITEM TO A INT AND IS NOW USEABLE
    
    return redirect('/admin-dash')


def xxiss_blog_page(request):
    return render(request, 'blog.html')