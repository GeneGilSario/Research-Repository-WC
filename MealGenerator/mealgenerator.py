import random

def random_meal():
    # Return a random meal.
    meals = ['pizza', 'tacos', 'sushi', 'hamburger', 'spaghetti']
    return random.choice(meals)

def print_meal():
    # Generate a random meal and print it.
    meal = random_meal()
    print(f"Your random meal is: {meal}")

def main():
    # Call the print_meal function to generate and print a random meal.
    print_meal()

if __name__ == "__main__":
    main()