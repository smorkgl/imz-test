import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import arrow from '../img/arrow1.svg'

export default function Carousel() {
    return (
        <div className="main h-96 select-none cursor-default">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
      >
                <Slider className="h-96">
          <Slide index={0}>
    <div className="bg-[url('/src/img/bg1.png')] bg-cover bg-no-repeat bg-center h-96 flex place-items-center">
    <ButtonBack className='button-back'><img src={arrow} className='arrow w-10'/></ButtonBack>
    <p className="container max-w-5xl width-full mx-auto text-white text-2xl">Исаевский машиностроительный завод - завод по производству стальных электросварных труб, с высоким уровнем автоматизации технологических процессов, выпускающий высококачественную продукцию на базе современных металлургических технологий. Ассортимент выпускаемой трубной продукции - более 90 наименований.</p>
    <ButtonNext className='button-next'><img src={arrow} className='arrow2 w-10'/></ButtonNext>
    </div>
</Slide>
          <Slide index={1}>
          <div className="bg-[url('/src/img/bg2.png')] bg-cover bg-no-repeat bg-center h-96 flex place-items-center">
          <ButtonBack className='button-back'><img src={arrow} className='arrow w-10'/></ButtonBack>
            <p className="container max-w-5xl width-full mx-auto text-white text-2xl">
    В 2014 году была внедрена в производство система менеджмента качества согласно международному стандарту ISO 9001:2008. Внедрение подтверждено сертификационным органом TUV SUD Management Service GmbH. ООО "Исаевский машиностроительный завод" стал инициатором и основным инвестором проекта строительства "Красносулинского металлургического комбината" на территории Красносулинского района Ростовской области.
</p>
<ButtonNext className='button-next'><img src={arrow} className='arrow2 w-10'/></ButtonNext></div></Slide>
          <Slide index={2}><div className="bg-[url('/src/img/bg3.png')] bg-cover bg-no-repeat bg-center h-96 flex place-items-center">
          <ButtonBack className='button-back'><img src={arrow} className='arrow w-10'/></ButtonBack>
          <p className="container max-w-5xl width-full mx-auto text-white text-2xl">
    Деятельность предприятия будет направлена на производство листовой и рулонной стали. Реализация данного проекта имеет огромное экономическое и социальное знание для региона и в этой связи проект был включен в 100 проектов Губернатора Ростовской области.</p>
    <ButtonNext className='button-next'><img src={arrow} className='arrow2 w-10'/></ButtonNext></div>
</Slide>
        </Slider>
      </CarouselProvider>

    </div>
        )
}

