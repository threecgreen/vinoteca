r"""Django settings for vinoteca project."""
import logging.config
from pathlib import Path

from .config import ConfigurationManager


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'd@xx^f(9^&kr3ur@@t(fzbfrwie6#o0(ar+#68a!@vory(+_+h'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Configuration file
CONFIG_MAN = ConfigurationManager(BASE_DIR / "vinoteca" / "config.yaml",
                                  BASE_DIR / "data" / "wine.db",
                                  BASE_DIR / "media",
                                  BASE_DIR / "vinoteca.log")

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.humanize",

    # Installed
    "rest_framework",
    "django_js_error_hook",
    "django_filters",

    # Internal apps
    "vinoteca",
    "dashboards",
    "rest",
    "places",
    "producers",
    "wine_attrs",
    "wines",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "vinoteca.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                # Add version number to all context of all pages
                "vinoteca.context_processors.version_context",
            ],
        },
    },
]

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": CONFIG_MAN.database_path
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "America/Chicago"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/
STATIC_URL = "/static/"

STATICFILES_DIRS = [
    BASE_DIR / "vinoteca" / "static",
    BASE_DIR / "rest" / "static"
]

# Media files
MEDIA_URL = "/media/"
MEDIA_ROOT = CONFIG_MAN.media_folder_path

# Django rest
REST_FRAMEWORK = {
    "DEFAULT_FILTER_BACKENDS": ("django_filters.rest_framework.DjangoFilterBackend",)
}

COLORS = {
    "debug": "\033[22;32m",
    "info": "\033[22;32m",
    "warning": "\033[01;33m",
    "error": "\033[22;31m"
}

# Logging
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "%(levelname)-8s %(asctime)-26s %(name)-20s %(message)s",
        },
        "simple": {
            "()": "colorlog.ColoredFormatter",
            "format": "%(log_color)s%(levelname)-8s %(reset)s%(message)s",
            "log_colors": {
                "DEBUG":    "bold_green",
                "INFO":     "bold_blue",
                "WARNING":  "bold_yellow",
                "ERROR":    "bold_orange",
                "CRITICAL": "bold_red",
            },
        },
    },
    "handlers": {
        "console": {
            "class": "colorlog.StreamHandler",
            "level": "INFO",
            "formatter": "simple",
        },
        "mail_admins": {
            "level": "ERROR",
            "class": "django.utils.log.AdminEmailHandler",
        },
        "file": {
            "level": "DEBUG",
            "class": "logging.handlers.RotatingFileHandler",
            "formatter": "verbose",
            "filename": CONFIG_MAN.log_path,
            "maxBytes": 256 * 1024 * 1024,
            "backupCount": 2
        }
    },
    "loggers": {
        "vinoteca": {
            "handlers": ["console", "file", "mail_admins"],
            "level": "DEBUG" if DEBUG else "INFO",
            "propagate": True,
        },
        "django": {
            "handlers": ["console", "file", "mail_admins"],
            "level": "DEBUG" if DEBUG else "INFO",
            "propagate": True,
        },
        "django.request": {
            "handlers": ["file", "mail_admins"],
            "level": "INFO",
            "propagate": False,
        },
        "django.template": {
            "handlers": ["file"],
            "level": "ERROR",
            "propagate": False,
        },
        "javascript_error": {
            "handlers": ["file", "mail_admins"],
            "level": "WARNING",
            "propagate": True,
        },
    },
}

logging.config.dictConfig(LOGGING)
