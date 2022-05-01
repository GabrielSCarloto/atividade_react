import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carrossel = () => {
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s2.glbimg.com/TS47JJX1VdQGvsiOKrmiVia8R6M=/0x0:4040x2693/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/z/d/xtaA1pRhqFn4NtPgAqrA/johnnydepp.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Disney tirou Depp de 'Piratas do Caribe' por acusações de abuso, diz ex-agente</h3>
      <p>Declaração gravada por Christian Carino faz parte do processo de difamação de Depp contra Amber.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s2.glbimg.com/XNVd_TRmA0VDfUcmVKWZcwZjn7Y=/0x0:1200x519/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/5/D/JPfFOMTHSDgvwfb8LlMw/mcpicanha.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>McDonald's decide tirar linha McPicanha de suas lojas no Brasil</h3>
      <p>Decisão ocorre após notificação do Ministério da Justiça e Procon-SP por falta de picanha em sanduíches.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s2.glbimg.com/jbaJnUbK-I8B9P1f8QI_i3Ut7Jk=/0x0:1053x527/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/D/c/UEsQFXTeG1SOvIyHEmbQ/whatsapp-image-2022-04-28-at-18.32.04-1-.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Resgatada de trabalho análogo à escravidão na BA chora ao tocar em mão de repórter: 'Receio de pegar na sua mão branca'</h3>
      <p>Doméstica que trabalhou 54 anos sem receber salários, emocionada, desabafou com jornalista.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Carrossel