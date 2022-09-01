from django.urls import path

from . import views


urlpatterns = [
    # UNDER CONSTRUCTION PAGE
    path('u-contact', views.contact_u),
    path('', views.index),
    path('about', views.about),
    # path('specs', views.specs),
    path('all-products', views.products),
    path('build-your-own-trailer', views.byoTrailer),
    path('test2', views.test_charge),
    path('sub-form', views.customer_suprt),
    # CUSTOMER PAGES
    path('specs/<str:rv>/<int:id>', views.specs),
    path('xxiss-blogs', views.xxiss_blog_page),
    path('register-warranty', views.reg_warranty),
    path('customer-form', views.customer_reg_form),
    # RECEIPT PAGES AND METHODS
    path('quick-order', views.customer_quick_order),
    # path('order-receipt', views.customer_receipt), 
    path('my-receipt', views.add_to_receipt),
    path('build-your-trailer', views.byo_trailer_order),
    # CUSTOMER LOGIN AND LOGOUT
    path('signup' , views.customer_sign_up),
    path('customer-login-page', views.customer_login_page),
    path('customer-dash-login', views.customer_dash),
    path('customer-dash-new', views.customer_new),
    path('customer-logout', views.customer_logout),
    path('return-to-dash', views.customer_request_dash),
    path('pay-balance', views.process_quick_order),
    path('dash-payment', views.make_payment_from_dash),
    # ADMIN URLS HERE
    path('check-messages', views.see_messages),
    path('create-order-admin', views.admin_create_order),
    path('admin-dash', views.admin_dash),
    path('admin-sign-in', views.admin_sign_in),
    path('admin-logout', views.admin_logout),
    path('xxissadminslogin', views.admin_login_page),
    path('admin-del-msg/<int:id>', views.admin_delete_msg),
    path('get-order-num', views.admin_search_ord_num),
]