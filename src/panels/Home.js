import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import '/public/App.css'

const mainLocations = [
  {
    title: 'Четыре моря',
    ways: [
      {
        title: 'Норд блю',
        islands: [
          {
            title: 'Ярсий',
            link: 'https://vk.com/topic-36291248_32878435',
          },
          {
            title: 'Дора',
            link: 'https://vk.com/topic-36291248_32878439',
          },
          {
            title: 'Миньон',
            link: 'https://vk.com/topic-36291248_38851752',
          },
          {
            title: 'Спайдер Майлс',
            link: 'https://vk.com/topic-36291248_38851753',
          },
          {
            title: 'Месса',
            link: 'https://vk.com/topic-36291248_32878443',
          },
          {
            title: 'Тримонд',
            link: 'https://vk.com/topic-36291248_38851754',
          },
          {
            title: 'КокХол',
            link: 'https://vk.com/topic-36291248_32878471',
          },
          {
            title: 'Элзи',
            link: 'https://vk.com/topic-36291248_38851755',
          },
          {
            title: 'Медвежий остров',
            link: 'https://vk.com/topic-36291248_38851756',
          },
          {
            title: 'Норд-Гранд',
            link: 'https://vk.com/topic-36291248_32878478',
          },
        ],
      },
      {
        title: 'Ист Блю	',
        islands: [
          {
            title: 'Остров Рассвета',
            link: 'https://vk.com/topic-36291248_32878486',
          },
          {
            title: 'Шеллтаун',
            link: 'https://vk.com/topic-36291248_32878491',
          },
          {
            title: 'Барати',
            link: 'https://vk.com/topic-36291248_32878548',
          },
          {
            title: 'Остров Кономи',
            link: 'https://vk.com/topic-36291248_32878623',
          },
          {
            title: 'Острова Орган',
            link: 'https://vk.com/topic-36291248_38725952',
          },
          {
            title: 'Заводной Остров',
            link: 'https://vk.com/topic-36291248_38725953',
          },
          {
            title: 'Текила Вульф',
            link: 'https://vk.com/topic-36291248_38725954',
          },
          {
            title: 'Остров-линкор',
            link: 'https://vk.com/topic-36291248_38725956',
          },
          {
            title: 'Остров Миррорбол',
            link: 'https://vk.com/topic-36291248_38725957',
          },
          {
            title: 'Логтаун',
            link: 'https://vk.com/topic-36291248_32878663',
          },
        ],
      },
      {
        title: 'Вест Блю',
        islands: [
          {
            title: 'Илусия',
            link: 'https://vk.com/topic-36291248_32878876',
          },
          {
            title: 'Бриндо',
            link: 'https://vk.com/topic-36291248_38735740',
          },
          {
            title: 'Остров Нотрис',
            link: 'https://vk.com/topic-36291248_38735741',
          },
          {
            title: 'Тороа',
            link: 'https://vk.com/topic-36291248_32878880',
          },
          {
            title: 'Империя Иговальда',
            link: 'https://vk.com/topic-36291248_38735737',
          },
          {
            title: 'Лас Кэмп',
            link: 'https://vk.com/topic-36291248_32878892',
          },
          {
            title: 'Страна Цветов',
            link: 'https://vk.com/topic-36291248_38735738',
          },
          {
            title: 'Мертольф',
            link: 'https://vk.com/topic-36291248_32878895',
          },
          {
            title: 'Остров Хильдора',
            link: 'https://vk.com/topic-36291248_38735739',
          },
          {
            title: 'Руотри',
            link: 'https://vk.com/topic-36291248_32878899',
          },
        ],
      },
      {
        title: 'Саут Блю',
        islands: [
          {
            title: 'Батерилла',
            link: 'https://vk.com/topic-36291248_32878901',
          },
          {
            title: 'Королевство Торино',
            link: 'https://vk.com/topic-36291248_38856021',
          },
          {
            title: 'Королевство Блисс',
            link: 'https://vk.com/topic-36291248_32878907',
          },
          {
            title: 'Тёмное Королевство Драм',
            link: 'https://vk.com/topic-36291248_38856022',
          },
          {
            title: 'Королевство Финилейв',
            link: 'https://vk.com/topic-36291248_32878911',
          },
          {
            title: 'Альдида',
            link: 'https://vk.com/topic-36291248_38856023',
          },
          {
            title: 'Архипелаг Fumer',
            link: 'https://vk.com/topic-36291248_38856024',
          },
          {
            title: 'Оружейная мануфактура',
            link: 'https://vk.com/topic-36291248_32878914',
          },
          {
            title: 'Гайджур',
            link: 'https://vk.com/topic-36291248_38856025',
          },
          {
            title: 'Центория',
            link: 'https://vk.com/topic-36291248_32878937',
          },
        ],
      },
    ],
  },
  {
    title: 'Мыс Гранд Лайн',
  },
  {
    title: 'Гранд лайн: рай',
    ways: [
      {
        "title": "Первый путь",
        "islands": [
          {"title": "Охвайми", "link": "https://vk.com/topic-36291248_53206640"},
          {"title": "Деспорте", "link": "https://vk.com/topic-36291248_53206538"},
          {"title": "Садотоп", "link": "https://vk.com/topic-36291248_32959303"},
          {"title": "Дорестад", "link": "https://vk.com/topic-36291248_53206552"},
          {"title": "Джанго Фета", "link": "https://vk.com/topic-36291248_32959315"},
          {"title": "Земилиантар", "link": "https://vk.com/topic-36291248_39063959"},
          {"title": "Раббер", "link": "https://vk.com/topic-36291248_32631209"},
          {"title": "Вильмрон", "link": "https://vk.com/topic-36291248_35046374"}
        ]
      },
      {
        "title": "Второй путь",
        "islands": [
          {"title": "Тенгейр", "link": "https://vk.com/topic-36291248_32959331"},
          {"title": "Хё Гарта", "link": "https://vk.com/topic-36291248_32959333"},
          {"title": "Бас-тер", "link": "https://vk.com/topic-36291248_32959334"},
          {"title": "Терсейра", "link": "https://vk.com/topic-36291248_32959336"},
          {"title": "Даммар", "link": "https://vk.com/topic-36291248_32959340"},
          {"title": "Магукаппи", "link": "https://vk.com/topic-36291248_32959345"},
          {"title": "Шахама", "link": "https://vk.com/topic-36291248_37781767"},
          {"title": "Рюори", "link": "https://vk.com/topic-36291248_37781769"},
          {"title": "Поднебесье", "link": "https://vk.com/topic-36291248_37781776"},
          {"title": "Альморика", "link": "https://vk.com/topic-36291248_37781780"}
        ]
      },
      {
        "title": "Третий путь",
        "islands": [
          {"title": "Гайдо Мэ", "link": "https://vk.com/topic-36291248_32959348"},
          {"title": "Алджера", "link": "https://vk.com/topic-36291248_53206565"},
          {"title": "Микос", "link": "https://vk.com/topic-36291248_53662664"},
          {"title": "Аква-лорд", "link": "https://vk.com/topic-36291248_32959354"},
          {"title": "Империалы", "link": "https://vk.com/topic-36291248_32959367"},
          {"title": "Синопсис", "link": "https://vk.com/topic-36291248_32959376"},
          {"title": "Верхизис", "link": "https://vk.com/topic-36291248_39573325"},
          {"title": "Гипердубрея", "link": "https://vk.com/topic-36291248_39121647"},
          {"title": "Эсхан", "link": "https://vk.com/topic-36291248_37194147"},
          {"title": "Чиарикка", "link": "https://vk.com/topic-36291248_37194157"}
        ]
      },
      {
        "title": "Четвёртый путь",
        "islands": [
          {"title": "Остров Кактус", "link": "https://vk.com/topic-36291248_32959397"},
          {"title": "Литтл Гарден", "link": "https://vk.com/topic-36291248_32959400"},
          {"title": "Драм", "link": "https://vk.com/topic-36291248_32959401"},
          {"title": "Рулука", "link": "https://vk.com/topic-36291248_38603420"},
          {"title": "Сэнди Айленд", "link": "https://vk.com/topic-36291248_32959407"},
          {"title": "Джайя", "link": "https://vk.com/topic-36291248_32959413"},
          {"title": "Скайпия", "link": "https://vk.com/topic-36291248_32959415"},
          {"title": "Спа", "link": "https://vk.com/topic-36291248_38603469"},
          {"title": "Water 7", "link": "https://vk.com/topic-36291248_32959421"}
        ]
      },
      {
        "title": "Пятый путь",
        "islands": [
          {"title": "Дракенвальд", "link": "https://vk.com/topic-36291248_53206711"},
          {"title": "Исла Крепускуло", "link": "https://vk.com/topic-36291248_53206725"},
          {"title": "Киель Терре", "link": "https://vk.com/topic-36291248_53206604"},
          {"title": "Белура", "link": "https://vk.com/topic-36291248_53206670"},
          {"title": "Башэ", "link": "https://vk.com/topic-36291248_53662643"},
          {"title": "Джемусалис", "link": "https://vk.com/topic-36291248_53206659"},
          {"title": "Сентинель", "link": "https://vk.com/topic-36291248_53206680"},
          {"title": "Грин Лайт", "link": "https://vk.com/topic-36291248_32959464"},
          {"title": "Каафенгард", "link": "https://vk.com/topic-36291248_53662628"}
        ]
      },
      {
        "title": "Шестой путь",
        "islands": [
          {"title": "Гербахарид", "link": "https://vk.com/topic-36291248_53206699"},
          {"title": "Сецилия", "link": "https://vk.com/topic-36291248_32959482"},
          {"title": "Лагуна", "link": "https://vk.com/topic-36291248_32959489"},
          {"title": "Иония", "link": "https://vk.com/topic-36291248_32959494"},
          {"title": "Стимхолл", "link": "https://vk.com/topic-36291248_32959501"},
          {"title": "Плато №6", "link": "https://vk.com/topic-36291248_48422941"},
          {"title": "Фрельйорд", "link": "https://vk.com/topic-36291248_32959509"},
          {"title": "Авалон", "link": "https://vk.com/topic-36291248_32959528"},
          {"title": "Кселарис", "link": "https://vk.com/topic-36291248_53206575"},
          {"title": "Амсэр", "link": "https://vk.com/topic-36291248_53206587"}
        ]
      },
      {
        "title": "Седьмой путь",
        "islands": [
          {"title": "Ямдась", "link": "https://vk.com/topic-36291248_53206521"},
          {"title": "Океания", "link": "https://vk.com/topic-36291248_33411052"},
          {"title": "Хуаншу", "link": "https://vk.com/topic-36291248_49515865"},
          {"title": "Вульдур", "link": "https://vk.com/topic-36291248_49494404"},
          {"title": "Бладроаст", "link": "https://vk.com/topic-36291248_33411068"},
          {"title": "Шурима", "link": "https://vk.com/topic-36291248_33411074"},
          {"title": "Элфузир", "link": "https://vk.com/topic-36291248_53662605"},
          {"title": "Селемен", "link": "https://vk.com/topic-36291248_49335334"},
          {"title": "Кхонхо Лэнд", "link": "https://vk.com/topic-36291248_53206530"},
          {"title": "Магмадор", "link": "https://vk.com/topic-36291248_53662652"}
        ]
      }
    ],
  }
]

export const Home = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();

  console.log(mainLocations[0].ways[0]);

  const seaTitle = (
    <div className="fourSeasTitles">
      {mainLocations[0].ways.map((sea) => 
        <div className="seaTitle" key={sea.title}>{sea.title}</div>
      )}
    </div>
  );

  const fourSeas = mainLocations[0].ways.map((sea) => 
    <div key={sea.title}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {sea.islands.map((island) => <a className="islandCard" key={island.title} href={island.link} target="_blank">{island.title}</a> )}
      </div>
    </div>
  );

  const fourSeasMobile = mainLocations[0].ways.map((sea) => 
    <div key={sea.title}>
      <Accordion open>
        <Accordion.Summary>
          <div className="seaTitle" style={{fontSize: '24px', textAlign: 'center', justifyContent: 'center !important'}}>{sea.title}</div>
        </Accordion.Summary>
        <Accordion.Content>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {sea.islands.map((island) => <a className="islandCard" key={island.title} href={island.link} target="_blank">{island.title}</a> )}
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );

  const grandLineTitleFirstHalf = (
    <div className="fourSeasTitles">
      {mainLocations[2].ways.slice(0, 4).map((sea) => 
        <div className="seaTitle" key={sea.title}>{sea.title}</div>
      )}
    </div>
  )

  const grandLineTitleSecondHalf = (
    <div className="fourSeasTitles secondHalf">
      {mainLocations[2].ways.slice(4, 7).map((sea) => 
        <div className="seaTitle border-none" key={sea.title}>{sea.title}</div>
      )}
    </div>
  )

  const firstHalf = mainLocations[2].ways.slice(0, 4).map((way) => 
    <div key={way.title}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {way.islands.map((island) => <a className="islandCard" key={island.title} href={island.link} target="_blank">{island.title}</a> )}
      </div>
    </div>
  )

  const secondHalf = mainLocations[2].ways.slice(4, 7).map((way) => 
    <div key={way.title}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {way.islands.map((island) => <a className="islandCard" key={island.title} href={island.link} target="_blank">{island.title}</a> )}
      </div>
    </div>
  )

  const grandLineMobile = mainLocations[2].ways.map((way) => 
    <div key={way.title}>
      <Accordion open>
        <Accordion.Summary>
          <div className="seaTitle" style={{fontSize: '24px', textAlign: 'center', justifyContent: 'center !important'}}>{way.title}</div>
        </Accordion.Summary>
        <Accordion.Content>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {way.islands.map((island) => <a className="islandCard" key={island.title} href={island.link} target="_blank">{island.title}</a> )}
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  )
  return (
    <Panel id={id}>
      <Group>
        <Div>
          <div className='fourSeasHeader'><div className='fourSeasHeaderText seas'>{mainLocations[0].title}</div></div>
          <div className="destop-only">
            {seaTitle}
            <div className="fourSeasGrid">
              {fourSeas}
            </div>
          </div>
          <div className="mobile-only">
            {fourSeasMobile}
          </div>

          {/* <div className="fourSeasFooter">
            <img src="src/assets/fourSeasFooter.png" alt="fourSeasFooter" />
          </div> */}
          <div className="reverseMountain">
            <a className="reverseMountainButton" href="https://vk.com/topic-36291248_32959561" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
              <div>Реверс Маунтин</div>
            </a>
          </div>
          <a href="https://vk.com/topic-36291248_32959558" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className='capeHeader'><div className='fourSeasHeaderText cape'>{mainLocations[1].title}</div></div>
          </a>
          <img className='blueBorder' src="blue-border.jpg" alt="grandLine" />
          <div className="grandLineHeader">
            <div className="fourSeasHeaderText heaven">{mainLocations[2].title}</div>
          </div>
          <div className="destop-only"> 
            {grandLineTitleFirstHalf}
          </div>
          
          {/* <div className="fourSeasGrid"> */}
          <div className="destop-only">
            <div className="fourSeasGrid">
              {firstHalf}
            </div>
          </div>
          <div className="mobile-only">
            {grandLineMobile}
          </div>
          <div className="blue-line"></div>
          <div className="destop-only">
            {grandLineTitleSecondHalf}
            <div className="blue-line"></div>
            <div className="fourSeasGrid secondHalf">
              {secondHalf}
            </div>
          </div>
          <div className="purple-line"></div>
        </Div>
      </Group>
    </Panel>
  );
};
