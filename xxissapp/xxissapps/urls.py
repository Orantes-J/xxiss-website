from django.urls import path

from . import views


urlpatterns = [
    path('', views.index),
    path('about', views.about),
    path('specs', views.specs),
    path('all-products', views.products),
    path('build-your-own-trailer', views.byoTrailer),
    path('test2', views.test_charge),
    path('sub-form', views.customer_suprt),
    # CUSTOMER PAGES

    # RECEIPT PAGES AND METHODS
    path('order-receipt', views.customer_receipt), 
    path('add-to-receipt', views.add_to_receipt),
    # CUSTOMER LOGIN AND LOGOUT
    path('customer-login-page', views.customer_login_page),
    path('customer-dash-login', views.customer_dash),
    path('customer-dash-new', views.customer_new),
    path('customer-logout', views.customer_logout),
    path('return-to-dash', views.customer_request_dash),
    # ADMIN URLS HERE
    path('check-messages', views.see_messages),
    path('admin-dash', views.admin_dash),
    path('admin-sign-in', views.admin_sign_in),
    path('admin-logout', views.admin_logout),
    path('xxissadminslogin', views.admin_login_page),
]