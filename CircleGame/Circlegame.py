import pygame
import sys
import random

# Initialize Pygame
pygame.init()

# Set up the display
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption('Avoid the Squares')

# Colors
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)

# Load the image
player_img = pygame.Surface((50, 50))
player_img.fill(BLUE)

# Define the player class
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = player_img
        self.rect = self.image.get_rect()
        self.rect.centerx = WIDTH // 2
        self.rect.bottom = HEIGHT - 10
        self.speed_x = 0

    def update(self):
        self.speed_x = 0
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.speed_x = -5
        if keys[pygame.K_RIGHT]:
            self.speed_x = 5
        self.rect.x += self.speed_x
        if self.rect.right > WIDTH:
            self.rect.right = WIDTH
        if self.rect.left < 0:
            self.rect.left = 0

# Create a group to hold the falling squares
falling_squares = pygame.sprite.Group()

# Function to create a new falling square
def create_square():
    square = pygame.Surface((50, 50))
    square.fill(random.choice([WHITE, BLUE, GREEN]))
    square.set_colorkey(WHITE)
    square.rect = square.get_rect()
    square.rect.x = random.randint(0, WIDTH - square.rect.width)
    square.rect.y = random.randint(-100, -50)
    square.speed_y = random.randint(5, 15)
    falling_squares.add(square)

# Create some initial falling squares
for _ in range(10):
    create_square()

# Main game loop
player = Player()
all_sprites = pygame.sprite.Group()
all_sprites.add(player)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update the player
    player.update()

    # Update the falling squares
    falling_squares.update()
    for square in falling_squares:
        square.rect.y += square.speed_y
        if square.rect.top > HEIGHT:
            square.rect.y = random.randint(-100, -50)
            square.rect.x = random.randint(0, WIDTH - square.rect.width)
            square.speed_y = random.randint(5, 15)

    # Check for collisions between the player and falling squares
    if pygame.sprite.spritecollideany(player, falling_squares):
        running = False

    # Draw everything
    screen.fill(WHITE)
    all_sprites.draw(screen)
    falling_squares.draw(screen)
    pygame.display.flip()

pygame.quit()
sys.exit()