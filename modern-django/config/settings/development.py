from .base import *

#SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY', default='jds&j%4+(*yzz5@@c#3q(t0u!v(64+2y2ma1$92fd)m_#fxz&$')
#overwriting the one in base file

DEBUG = env.bool('DJANGO_DEBUG', default=True)