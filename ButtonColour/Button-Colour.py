import tkinter as tk
import random

def change_color():
    # This function changes the background color of the canvas.
    colors = ["red", "blue", "green", "yellow", "purple", "white"]
    new_color = random.choice(colors)
    canvas.config(bg=new_color)

root = tk.Tk()

canvas = tk.Canvas(root, width=400, height=300)
canvas.pack()

button = tk.Button(root, text="Change Color", command=change_color)
button.pack()

root.mainloop()