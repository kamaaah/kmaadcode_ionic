## Manage authentication state (and API calls)
ionic g service services/authentication

# Additional Pages 
ionic g page pages/intro
ionic g page pages/login

# Secure inside area
 ionic g guard guards/auth --implements CanLoad

 # Show intro automatically once
 inoic g guard guards/intro --implments CanLoad

 # Automatically log in users
 ionic g guard guards/autoLogin --implements CanLoad

# use moke API from reqres.in