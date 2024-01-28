export default function Job() {
    return (
        <div>
            <div className="job-container mt-10 bg-[url('/src/img/job.png')] bg-cover bg-no-repeat bg-center flex place-items-center select-none cursor-default ">
                <div className="job-container__inside text-white ml-60">
                    <div className="bg-black/30 rounded-3xl p-5">
                    <h1>РАБОТА НА ИМЗ</h1>
                    <div className="work__line mt-5" />
                    <br />
                    <p>Мы верим в проявление высочайшего уровня личной честности, командной работы и уважения к разнообразной культуре наших сотрудников и компаний. Мы верим в то, что всегда должны справедливо относиться к людям, будь то сотрудники, поставщики или клиенты, и всегда ищем способы улучшить наш сервис и внести свой вклад в сообщества, в которых мы живем и работаем. Наши сотрудники - основа нашего успеха.</p>   
                    <br/><br/><p>Наша команда из более чем 1 000 человек состоит из квалифицированных операторов, водителей, менеджеров по работе с клиентами, а также специалистов в области отдела кадров, информационных технологий, управления бизнесом, бухгалтерского учета и финансов и других специалистов.</p>
                    </div>
                    <a href="#" class="inline-flex items-center p-3 m-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-8">
            Узнать о вакансиях
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a></div>
                    
            </div>
        </div>
    )
}