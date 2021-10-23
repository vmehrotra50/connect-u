from user import *
from event import *

def main():
    bob = User(User.generateToken(), "happy", [])
    print(bob.token)

if __name__ == "__main__":
    main()
