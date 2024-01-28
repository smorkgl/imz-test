import news1 from '../img/news1.jpg'
import news2 from '../img/news2.jpg'
import news3 from '../img/news3.jpg'
import news4 from '../img/news4.jpg'
import newsicon from '../img/newsicon.svg'
import video from '../img/video.svg'
import qr from '../img/qr.gif'
import tube from '../img/tube.svg'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Main() {
    return (
        <div className="space-x-4 py-3 2xl max-w-7xl width-full mx-auto container mt-5 relative">
            <div className='flex justify-between'>
            <div>
            <div className='flex gap-2 cursor-pointer'>
            <img src={newsicon} className='w-5'/>
            <p className="text-2xl">Последние новости:</p>
            </div>
            <div className='flex flex-wrap gap-20 mt-5'>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src={news1} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ПОЗДРАВИЛ ДЕТЕЙ, МЕТАЛЛУРГОВ, БУДУЩИХ ПЕРВОКЛАССНИКОВ, С ДНЕМ ЗНАНИЙ!</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">Исаевский машиностроительный завод вручил подарки первоклассникам. В этом году 13 детей - сотрудников ООО "ИМЗ" впервые переступят порог школы.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" className='max-h-200' src={news2} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">19 АВГУСТА В П. МОЛОДЕЖНЫЙ КРАСНОСУЛИНСКОГО РАЙОНА СОСТОЯЛОСЬ ОТКРЫТИЕ ДЕТСКОЙ ИГРОВОЙ ПЛОЩАДКИ</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">В День рождение поселка Молодежный при финансовой поддержке ООО «ИМЗ» состоялось открытие детской игровой и спортивной площадки.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" className='max-h-200' src={news3} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">14 ИЮЛЯ СОСТОЯЛАСЬ ТОРЖЕСТВЕННАЯ ЦЕРЕМОНИЯ ПОДПИСАНИЯ ДОПОЛНИТЕЛЬНОГО СОГЛАШЕНИЯ МЕЖДУ ИСАЕВЫМ РАМЗАНОМ МУСАЕВИЧЕМ И НАЧАЛЬНИКОМ ГУФСИН РОССИИ ПО РОСТОВСКОЙ ОБЛАСТИ ДМИТРИЕМ НИКОЛАЕВИЧЕМ БЕЗРУКИХ.</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">Подписание данного соглашения предусматривает строительство и введение в эксплуатацию второго здания - общежития, изолированного участка, функционирующего, как исправительный центр (ИУФИЦ) на 110…</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" className='max-h-200' src={news4} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">14 ИЮЛЯ ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ОТМЕТИЛ СВОЙ ПРОФЕССИОНАЛЬНЫЙ ПРАЗДНИК-ДЕНЬ МЕТАЛЛУРГА!</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">По случаю Дня металлурга на производственной площадке состоялась церемония награждения</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 -mt-10">
            Предыдущие записи
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
</div>
</div>
<div className="">
    <div className='flex gap-2'>
        <img src={video} className="w-6"/>
<p className="text-2xl">Видео о ИМЗ:</p>
</div>
<div className='iframe-video flex flex-col gap-12 mt-5'>
      <LiteYouTubeEmbed 
        id="7YzIpIORxOY"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
      <LiteYouTubeEmbed 
        id="8hb_LDeW-_0"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
      <LiteYouTubeEmbed 
        id="nGbtapJ6E6A"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  </div>
  <div className='flex gap-2 mt-10'>
        <img src={tube} className="w-6"/>
<p className="text-2xl ">Продукция:</p>
</div>
  <img src={qr} />
</div>
</div>
<div>
  </div>
</div>

    )
}

export {Main}