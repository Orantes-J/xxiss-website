from ast import If
from multiprocessing import context
from django.shortcuts import render, redirect
from django.contrib import messages
from smtplib import SMTPResponseException
import smtplib

# from helper import addOns

# DATABASE CONNECTION
import mysql.connector
from requests import session

trailers  = [
    {
        "model" : 'Roam',
        "location" : 'Florida',
        "size" : 'null',
        "d_payment" : 3000,
        "r_payment" : 4000,
        "total" : 7000
    },

    {
        "model" : 'Coyote',
        "location" : 'Colorado',
        "size" : [5, 10],
        "d_payment" : 3000,
        "r_payment" : 4000,
        "total" : 7000
    },
    
    {
        "model" : 'Sparta',
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

# Create your views here.
def index(request):
    logged_user = []
    try:
        print('running 1')
        print('ahhh')
        user = request.session['user_id']
        print(user, 'this is session')
        print(request.session['user_id'], 'second user session test')
        hey = cursor.execute(f'SELECT * FROM customers WHERE id = {request.session["user_id"][0]}')
        print(hey, 'this is hey')
        fetch_logged = cursor.fetchall()
        for i in fetch_logged:
            logged_user.append(i)
        context = {
            'user' : logged_user
        }
        print(context)
        return render(request, 'index.html', context)
    except:
        print('something went wrong')
        print('running 2')
        return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def specs(request):
    context = {
        'addons' : addOns
    }
    print(context)
    return render(request, 'specs.html', context)

def products(request):
    user = request.session['user_id']
    context = {
        'addons' : addOns,
        'user' : user
    }
    print(addOns[0]['color'])
    return render(request, 'products.html', context)

def byoTrailer(request):
    return render(request, 'byotrailer.html')

# ADD TO RECEIPT

def add_to_receipt(request):
    if request.method == 'POST':
        list_of_add = {
        "add1" : request.POST.get('add-1'),
        "add2" : request.POST.get('add-2'),
        "add3" : request.POST.get('add-3'),
        "add4" : request.POST.get('add-4'),
        "add5" : request.POST.get('add-5'),
        "add6" : request.POST.get('add-6'),
        "add7" : request.POST.get('add-7'),
        "add8" : request.POST.get('add-8'),
        "add9" : request.POST.get('add-9'),
        "add10" : request.POST.get('add-10'),
        "add11" : request.POST.get('add-11'),
        "add12" : request.POST.get('add-12'),
        "add13" : request.POST.get('add-13'),
        "add14" : request.POST.get('add-14'),
        "add15" : request.POST.get('add-15'),
        "add16" : request.POST.get('add-16'),
        }
        print('this has been added to receipt', list_of_add)

        return redirect('/order-receipt')

# CHARGE ONLINE PAYMENTS ALGO
def test_charge(request):
    print('*'*50)
    print(pract_item['price'] + pract_item['tax'])
    pract_item['paid'] = True
    print(pract_item['paid'])
    print('*'*50)
    
    return redirect('/')


# CUSTOMER SUPPORT FORM - SUBMIT 

# HIDE THIS INFORMATION AFTER

def customer_suprt(request):
    if request.method == "POST":
        customer_name = request.POST.get('f-name')
        customer_phone = request.POST.get('f-phone')
        customer_email = request.POST.get('f-email')
        customer_msg = request.POST.get('f-textarea')

        # ALGORITHM TO FIND SLEECTED ITEM WHICH HAS ATTRIBUTE OF TRUE

        # EMAIL INFORMATION TO SELF - CREATE CONNETION VIA GMAIL SERVER
        try:
            sql = "INSERT INTO request_quotes(client_name, client_phone, client_email, client_msg) VALUES (%s, %s, %s, %s)"
            val = (customer_name, customer_phone, customer_email, customer_msg)
            cursor.execute(sql, val)
            xxiss_cnx.commit()
            print(cursor.rowcount, 'record inserted')
            print(customer_name, customer_email, customer_msg, customer_phone)
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

def customer_login_page(request):
    return render(request, 'customerlogin.html')

def customer_request_dash(request):
    try:
        curr_user = request.session['user_id']
        logged_user = curr_user
        context = {
            'logged_user' : logged_user
        }
        return render(request, 'customerdash.html', context)
    except:
        print('line 232 activated')
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

# CREATING CUSTOMER RECEIPT
def customer_receipt(request):
    return render(request, 'receipt.html')

def admin_login_page(request):
    return render(request, 'adminlogin.html')

def see_messages(request):
    query = ("SELECT * FROM request_quotes")
    cursor.execute(query)
    all_msgs = cursor.fetchall()
    context = {
        'messages' : all_msgs
    }
    return render(request, 'messages.html', context)

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
    if request.method == "GET":
        return redirect('/')
    else:
        context = {
            'admin' : main_admin[1]
        }
        return render(request, 'admindash.html', context)

def admin_logout(request):
    request.session.flush()
    return redirect('/')