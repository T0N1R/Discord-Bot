'''
Autor: Antonio Reyes
bot de discord para el grupo

'''
# -*- coding: utf-8 -*-
import praw
import discord
import time
import random
import asyncio
from discord.ext.commands import Bot
from discord.ext import commands

# cuenta de reddit
reddit = praw.Reddit(client_id='INGRESAR ID',
                         client_secret='INGRESAR SECRETO',
                         password='INGRESAR CONTRASEÑA',
                         user_agent='USER_AGENT',
                         username='USERNAME')

# lista de urls de Animemes
lista_Animeme = []

# lista de url de Prequelmemes
lista_Prequel = []

# lista de url de Dankmemes
lista_dank = []

# lista de url sakura
lista_sakura = []

# lista url bestgirl
lista_bestgirl = []

# lista url Padoru
lista_Padoru = []

lista_pewds = []


def get_meme(sitio):
    lista = []

    subreddit = reddit.subreddit(sitio)

    top_subreddit = subreddit.hot(limit=102)

    for submission in top_subreddit:
        if not submission.stickied:
            lista.append(submission.url)

    return lista


token = 'NTI2NjIyNDg0OTI2MzAwMTYw.DwIMfQ.WTBff8XS8Y2z1jckMRgiiO3XaNI'

bot = commands.Bot(command_prefix='.')


# el bot esta funcionando
@bot.event
async def on_ready():
    print('bot corre')

'''
@bot.event
async def on_message(message):
    autor = str(message.author)
    contenido = message.content

    print(autor + ': ' + contenido)
'''

# .ping
#respuesta: pong


@bot.command()
async def ping(ctx):
    await ctx.send('pong')

# .marco
# respuesta:


@bot.command()
async def marco(ctx):
    await ctx.send('polo')

# .tgs
# respuesta: meme de Fallout


@bot.command()
async def tgs(ctx):
    await ctx.send('https://i.imgur.com/OEW2hx5.jpg')

# .animemes
# respuesta: meme de Animemes


@bot.command()
async def animemes(ctx):
    lista_Animeme = get_meme('Animemes')
    num = random.randint(0, 99)

    await ctx.send(lista_Animeme[num])

# .padoru
# respuesta: Padorus


@bot.command()
async def padoru(ctx):
    lista_Padoru = get_meme('Padoru')
    num = random.randint(0, 30)

    await ctx.send(lista_Padoru[num])

# .bestgirl
# respuesta: meme de Tohsaka


@bot.command()
async def bestgirl(ctx):
    lista_bestgirl = get_meme('OneTrueTohsaka')
    num = random.randint(0, 99)

    await ctx.send(lista_bestgirl[num])

# .sakura
# respuesta: fotos de sakura


@bot.command()
async def sakura(ctx):
    lista_sakura = get_meme('SakuraMatou')
    num = random.randint(0, 99)

    await ctx.send(lista_sakura[num])

# .dank
# respuesta: memes de dankmemes


@bot.command()
async def dank(ctx):
    lista_dank = get_meme('dankmemes')
    num = random.randint(0, 99)

    await ctx.send(lista_dank[num])

# .prequel
# respeusta: memes de Prequelmemes


@bot.command()
async def prequel(ctx):
    lista_Prequel = get_meme('Prequelmemes')
    num = random.randint(0, 99)

    await ctx.send(lista_Prequel[num])

# .fumino
#
@bot.command()
async def fumino(ctx):
    await ctx.send('https://i.imgur.com/9J98YXR.jpg')


# .uruka
@bot.command()
async def uruka(ctx):
    await ctx.send('https://cdn.myanimelist.net/images/characters/3/363074.jpg')

@bot.command()
async def pewds(ctx):
    lista_pewds = get_meme('PewdiepieSubmissions')
    num = random.randint(0, 99)

    await ctx.send(lista_pewds[num])

# .lista
# repuesta: lista de comandos
@bot.command()
async def lista(ctx):
    await ctx.send('comandos que sirven: ' + '\n' + '.animemes' + '\n' + '.padoru' + '\n'
                   + '.tgs' + '\n' + '.ping' + '\n' + '.marco' +
                   '\n' + '.bestgirl' + '\n' + '.fumino' + '\n'
                   + '.uruka' + '\n' + '.prequel' + '\n' + '.sakura')


# async def on_member_update(before,after):


bot.run(token)
