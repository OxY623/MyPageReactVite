import {MouseEvent} from "react";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, Linkedin, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  const handleClicktoInstagram = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open('https://www.instagram.com/supertramper_spb/', '_blank');
  }

  const handleClicktoTelegram = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open('https://t.me/frontender89', '_blank');
  }

  const handleClicktoLinkedin = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/artem-aleksiutovich/', '_blank');
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Связаться со мной</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-xl font-semibold mb-4">Контактная информация</h2>
            <div className="space-y-4">
              <a href="mailto:artem.aleksiutovich.br@gmail.com" className="group flex flex-row items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400 group-hover:scale-105 group-hover:text-green-500  transition-all ease-in" />
                <span className="group-hover:scale-105 group-hover:text-green-500 transition-all ease-in">artem.aleksiutovich.br@gmail.com</span>
              </a>
              <a title="Позвонить мне" href="tel:+79013011397" className=" group flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400 group-hover:scale-105 group-hover:text-green-500  transition-all ease-in" />
                <span className="group-hover:scale-105 group-hover:text-green-500 transition-all ease-in">+7 901 301 13 97</span>
              </a>
              <a title="Написать мне в телеграмм" href="https://t.me/frontender89" className="group flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-gray-400 group-hover:scale-105 group-hover:text-green-500  transition-all ease-in" />
                <span className="group-hover:scale-105 group-hover:text-green-500 transition-all ease-in">@frontender89</span>
                <sub className="text-orange-400 align-top">(предпочитаемы способ связи)</sub>
              </a>
            </div>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-xl font-semibold mb-4">Социальные сети</h2>
            <div className="space-y-4">
              <Button variant="outline" onClick={(e)=>handleClicktoInstagram(e)} className="w-full justify-start">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
              <Button onClick={(e) =>  handleClicktoLinkedin(e)} variant="outline" className="w-full justify-start">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button onClick={(e)=> handleClicktoTelegram(e)} variant="outline" className="w-full justify-start">
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram
              </Button>
            </div>
          </Card>
        </div>

        <Card className="mt-8 bg-zinc-900 border-zinc-800 p-6">
          <h2 className="text-xl font-semibold mb-4">Локация</h2>
          <p className="text-gray-400">
            Беларусь, Минск<br />
            Готов к удаленной работе<br />
            Возможен релокейт
          </p>
        </Card>
      </div>
    </div>
  );
}