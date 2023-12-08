import tkinter as tk

def open_burger_menu():
    burger_menu.grid(row=0, column=1) # Show the burger menu when the button is clicked

def close_burger_menu():
    burger_menu.grid_forget() # Hide the burger menu when the close button is clicked

root = tk.Tk()

burger_menu = tk.Menu(root)
burger_menu.add_command(label="Option 1", command=lambda: print("Option 1 selected")) # Add option 1 to the burger menu
burger_menu.add_command(label="Option 2", command=lambda: print("Option 2 selected")) # Add option 2 to the burger menu
burger_menu.add_command(label="Option 3", command=lambda: print("Option 3 selected")) # Add option 3 to the burger menu

menu_button = tk.Button(root, text="Open Burger Menu", command=open_burger_menu)
menu_button.grid(row=0, column=0) # Add the menu button to the window

root.config(menu=burger_menu) # Add the burger menu to the window

root.mainloop() # Start the tkinter main event loop