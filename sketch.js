backgroundimg,BOMBimg,Bulletsimg,Playersimg,Youimg, Zombiesimg 
background
function preload(){
backgroundimg=loadImage("Background.png")
BOMBimg=loadImage("BOMB.jpg")
Bulletsimg=loadImage("Bullets.png")
Playersimg=loadImage("Players.jpg")
Youimg=loadImage("You.jpg")
Zombiesimg=loadImage("Zombies.jpg")
} 
 function setup(){
     createCanvas(600,600)
     background=createSprite(0,0,600,600)
     background.addImage(backgroundimg)
 }