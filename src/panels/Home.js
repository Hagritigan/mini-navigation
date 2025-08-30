import { useState, useEffect, useRef } from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion, ModalCard, ModalRoot } from '@vkontakte/vkui';
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
      },
      {
        "title": "Общие локации",
        "islands": [
          {"title": "Архипелаг Альферац", "link": "https://vk.com/topic-36291248_40449644"},
          {"title": "Сабаоди", "link": "https://vk.com/page-36291248_49183470"},
          {"title": "Гран Тесоро", "link": "https://vk.com/topic-36291248_35046384"},
          {"title": "Юн", "link": "https://vk.com/topic-36291248_32959598"},
          {"title": "Пожиратель Кораблей", "link": "https://vk.com/topic-36291248_32959589"},
          {"title": "Футоши", "link": "https://vk.com/topic-36291248_33993064"},
          {"title": "Ржавый месяц", "link": "https://vk.com/topic-36291248_53662681"},
          {"title": "Маринфорд", "link": "https://vk.com/topic-36291248_32959573"},
          {"title": "Импел Даун", "link": "https://vk.com/topic-36291248_32959578"},
          {"title": "Эниес Лобби", "link": "https://vk.com/topic-36291248_32959576"},
          {"title": "Остров Крепость Сайфер Пола", "link": "https://vk.com/topic-36291248_39242261"},
          {"title": "Базы Морского Дозора", "modal": true, "childrens": [
            {"title": "Вест-Блю: Штаб Дозора", "link": "https://vk.com/topic-36291248_35937206"},
            {"title": "Ист-Блю: Штаб Дозора", "link": "https://vk.com/topic-36291248_35937237"},
            {"title": "Норд-Блю: Штаб Дозора", "link": "https://vk.com/topic-36291248_35937262"},
            {"title": "Саус-Блю: Штаб Дозора", "link": "https://vk.com/topic-36291248_35937291"},
            {"title": "G-2", "link": "https://vk.com/topic-36291248_35937331"},
            {"title": "G-3", "link": "https://vk.com/topic-36291248_35937348"},
            {"title": "G-4", "link": "https://vk.com/topic-36291248_35937368"},
            {"title": "Мариджоа", "link": "https://vk.com/topic-36291248_35937376"},
          ]},
          {"title": "Локации Революционной Армии", "modal": true, "childrens": [
            {"title": "Гранд Лайн о. Момоиро База РА", "link": "https://vk.com/topic-36291248_38515909"},
            {"title": "Гранд Лайн о. Балтиго База РА", "link": "https://vk.com/topic-36291248_31714605"},
            {"title": "Штаб Революционной Армии в Вест Блю", "link": "https://vk.com/topic-36291248_35530028"},
            {"title": "Штаб Революционной Армии в Саут Блю", "link": "https://vk.com/topic-36291248_35530049"},
            {"title": "Штаб Революционной Армии в Ист Блю ", "link": "https://vk.com/topic-36291248_35530114"},
            {"title": "Штаб Революционной Армии в Норд Блю", "link": "https://vk.com/topic-36291248_35530023"},
          ]},

        ]
      }
    ],
  },
  // {
  //   title: 'Гранд лайн: новый мир',
  //   ways: [
  //     {
  //       "title": "Первый путь", 
  //       "islands": [
  //         {"title": "Аква-лорд", "link": "https://vk.com/topic-36291248_32959354"},
  //         {"title": "Империалы", "link": "https://vk.com/topic-36291248_32959367"},
  //         {"title": "Синопсис", "link": "https://vk.com/topic-36291248_32959376"},
  //         {"title": "Верхизис", "link": "https://vk.com/topic-36291248_39573325"},
  //       ]
  //     }
  //   ]
  // }
]



export const Home = ({ id, fetchedUser }) => {

  const routeNavigator = useRouteNavigator();
  const [currentSea, setCurrentSea] = useState(null);
  const [currentWay, setCurrentWay] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [currentIsland, setCurrentIsland] = useState(null);
  const [currentOthersWay, setCurrentOthersWay] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const seaDetailsRef = useRef(null);
  const wayDetailsRef = useRef(null);

  useEffect(() => {
    if (currentSea && seaDetailsRef.current) {
      seaDetailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentSea]);

  useEffect(() => {
    if (currentWay && wayDetailsRef.current) {
      wayDetailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentWay]);

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
    <div key={sea.title} className={`mobileSea ${currentSea?.title === sea.title ? 'mobileSeaActive' : ''}`}>
      <div className="seaTitle" 
        style={{textAlign: 'center', justifyContent: 'center !important'}}
        onClick={() => {
          if (currentSea?.title === sea.title) {
            setCurrentSea(null);
          } else {
            setCurrentSea(sea);
          }
        }}
      >{sea.title}</div>
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
    <div key={way.title} className={`mobileSea ${currentWay?.title === way.title ? 'mobileSeaActive' : ''}`}>
      <div className="seaTitle" 
        style={{textAlign: 'center', justifyContent: 'center !important'}}
        onClick={() => {
          if (way.modal) {
            setActiveModal('way-modal');
            setCurrentWay(way);
          } else {
            if (currentWay?.title === way.title) {
              setCurrentWay(null);
            } else {
              setCurrentWay(way);
            }
          }
        }}
      >{way.title}</div>
    </div>
  )

  const othersLocations = mainLocations[2].ways.slice(7).map((way) => 
    <div key={way.title}>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {way.islands.map((island) => 
          island.modal ? (
            <div 
              key={island.title} 
              className="islandCard othersCard" 
              onClick={() => {
                setCurrentIsland(island);
                setActiveModal('island-modal');
              }}
              style={{cursor: 'pointer'}}
            >
              {island.title}
            </div>
          ) : (
            <a className="islandCard othersCard" key={island.title} href={island.link} target="_blank">{island.title}</a>
          )
        )}
      </div>
    </div>
  )

  // Функция поиска по всем островам
  const searchIslands = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = [];
    const searchLower = query.toLowerCase();

    // Поиск по четырем морям
    mainLocations[0].ways.forEach((sea) => {
      sea.islands.forEach((island) => {
        if (island.title.toLowerCase().includes(searchLower)) {
          results.push({
            ...island,
            location: sea.title,
            type: 'sea'
          });
        }
      });
    });

    // Поиск по Grand Line
    mainLocations[2].ways.forEach((way) => {
      way.islands.forEach((island) => {
        if (island.title.toLowerCase().includes(searchLower)) {
          results.push({
            ...island,
            location: way.title,
            type: 'grand-line'
          });
        }
      });
    });

    // Поиск по названиям путей (ways)
    mainLocations.forEach((location) => {
      if (location.ways) {
        location.ways.forEach((way) => {
          if (way.title.toLowerCase().includes(searchLower)) {
            results.push({
              title: way.title,
              location: location.title,
              type: 'way',
              way: way
            });
          }
        });
      }
    });

    // Поиск по дочерним элементам (childrens) всех локаций
    mainLocations.forEach((location) => {
      if (location.ways) {
        location.ways.forEach((way) => {
          way.islands.forEach((island) => {
            if (island.childrens) {
              island.childrens.forEach((child) => {
                if (child.title.toLowerCase().includes(searchLower)) {
                  results.push({
                    ...child,
                    parentIsland: island.title,
                    location: way.title,
                    type: 'child'
                  });
                }
              });
            }
          });
        });
      }
    });

    setSearchResults(results);
    setShowSearchResults(true);
  };

  // Обработчик клика по результату поиска
  const handleSearchResultClick = (result) => {
    setCurrentIsland(null);
    setCurrentWay(null);
    setCurrentSea(null);
    setActiveModal(null);

    
    if (result.type === 'way') {
      // Для путей показываем все острова в модальном окне
      setCurrentIsland({
        title: result.title,
        childrens: result.way.islands
      });
      setActiveModal('island-modal');
    } else if (result.type === 'child') {
      // Дочерние элементы всегда открываются по ссылке
      window.open(result.link, '_blank');
    } else if (result.modal) {
      // Основные острова с модальными окнами
      setCurrentIsland(result);
      setActiveModal('island-modal');
    } else {
      // Обычные острова
      window.open(result.link, '_blank');
    }
    setShowSearchResults(false);
    setSearchQuery('');
  };

  // Закрытие результатов поиска при клике вне поля
  const handleClickOutside = () => {
    setTimeout(() => {
      setShowSearchResults(false);
    }, 200);
  };
  
  return (
    <Panel id={id}>
      <Group>
        <Div>
          {/* Поиск по островам */}
          <div style={{padding: '12px', position: 'relative'}}>
            <input
              type="text"
              placeholder="Поиск по островам..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                searchIslands(e.target.value);
              }}
              onBlur={handleClickOutside}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                outline: 'none'
              }}
            />
            {showSearchResults && searchResults.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '2px solid #ddd',
                borderRadius: '8px',
                maxHeight: '300px',
                overflowY: 'auto',
                zIndex: 1000,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}>
                {searchResults.map((result, index) => (
                  <div
                    key={`${result.title}-${index}`}
                    onClick={() => handleSearchResultClick(result)}
                    style={{
                      padding: '12px',
                      borderBottom: '1px solid #eee',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                      <span style={{fontWeight: 'bold', color: 'black'}}>{result.title}</span>
                      {result.type === 'child' && (
                        <span style={{fontSize: '11px', color: '#888', fontStyle: 'italic'}}>
                          {result.parentIsland}
                        </span>
                      )}
                      {result.type === 'way' && (
                        <span style={{fontSize: '11px', color: '#0066cc', fontStyle: 'italic'}}>
                          Путь
                        </span>
                      )}
                    </div>
                    <span style={{fontSize: '12px', color: '#666'}}>{result.location}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Div>
      </Group>
      <Group>
        <Div>
          <div className='fourSeasHeader'><div className='fourSeasHeaderText seas'>{mainLocations[0].title}</div></div>
          <div className="destop-only">
            {seaTitle}
            <div className="fourSeasGrid">
              {fourSeas}
            </div>
          </div>
          <div className="mobile-only mobileFourSeas">
            {fourSeasMobile}
          </div>
          <div className="mobile-only" ref={seaDetailsRef}>
            <div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                {currentSea?.islands.map((island) => 
                  island.modal ? (
                    <div 
                      key={island.title} 
                      className="islandCard" 
                      onClick={() => {
                        setCurrentIsland(island);
                        setActiveModal('island-modal');
                      }}
                      style={{cursor: 'pointer'}}
                    >
                      {island.title}
                    </div>
                  ) : (
                    <a className="islandCard" key={island.title} href={island.link} target="_blank">{island.title}</a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* <div className="fourSeasFooter">
            <img src="src/assets/fourSeasFooter.png" alt="fourSeasFooter" />
          </div> */}
          <div className="reverseMountain">
            <a className="reverseMountainButton" href="https://vk.com/topic-36291248_32959561" target="_blank" style={{textDecoration: 'none'}}>
              <div>Реверс Маунтин</div>
            </a>
          </div>
          <div className="reverseMountain">
            <a className="reverseMountainButton" href="https://vk.com/topic-36291248_32959558" target="_blank" style={{textDecoration: 'none'}}>
              <div>{mainLocations[1].title}</div>
            </a>
          </div>
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
            <div className="blue-line"></div>
          </div>
          <div className="mobile-only mobileFourSeas">
            {grandLineMobile}
          </div>
          <div className="mobile-only" ref={wayDetailsRef}>
            <div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                {currentWay?.islands.map((island) => 
                  island.modal ? (
                    <div 
                      key={island.title} 
                      className="islandCard" 
                      onClick={() => {
                        setCurrentIsland(island);
                        setActiveModal('island-modal');
                      }}
                      style={{cursor: 'pointer'}}
                    >
                      {island.title}
                    </div>
                  ) : (
                    <a className="islandCard" key={island.title} href={island.link} target="_blank">{island.title}</a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="destop-only">
            {grandLineTitleSecondHalf}
            <div className="blue-line"></div>
            <div className="fourSeasGrid secondHalf">
              {secondHalf}
            </div>
          </div>
          {/* <div className="purple-line"></div> */}
          <div className="destop-only">
            <div className="othersHeader">
              <div className="fourSeasHeaderText heaven">Остальные</div>
            </div>
            <div className="othersGrid secondHalf">
              {othersLocations}
            </div>
          </div>
        </Div>
      </Group>
      
      <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
        <ModalCard
          id="sea-modal"
          header={currentSea?.title}
          onClose={() => setActiveModal(null)}
        >
          <div style={{display: 'flex', flexDirection: 'column', padding: '8px 0', maxHeight: '70vh', overflowY: 'auto', WebkitOverflowScrolling: 'touch'}}>
            {currentSea?.islands.map((island) => (
              island.modal ? (
                <div 
                  key={island.title} 
                  className="islandCard" 
                  onClick={() => {
                    setCurrentIsland(island);
                    setActiveModal('island-modal');
                  }}
                  style={{cursor: 'pointer'}}
                >
                  {island.title}
                </div>
              ) : (
                <a 
                  className="islandCard" 
                  key={island.title} 
                  href={island.link} 
                  target="_blank"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  {island.title}
                </a>
              )
            ))}
          </div>
        </ModalCard>
        
        <ModalCard
          id="way-modal"
          header={currentWay?.title}
          onClose={() => setActiveModal(null)}
        >
          <div style={{display: 'flex', flexDirection: 'column', padding: '8px 0', maxHeight: '70vh', overflowY: 'auto', WebkitOverflowScrolling: 'touch'}}>
            {currentWay?.islands.map((island) => (
              island.modal ? (
                <div 
                  key={island.title} 
                  className="islandCard" 
                  onClick={() => {
                    setCurrentIsland(island);
                    setActiveModal('island-modal');
                  }}
                  style={{cursor: 'pointer', margin: '8px 0'}}
                >
                  {island.title}
                </div>
              ) : (
                <a 
                  className="islandCard" 
                  key={island.title} 
                  href={island.link} 
                  target="_blank"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  {island.title}
                </a>
              )
            ))}
          </div>
        </ModalCard>
        
        <ModalCard
          id="island-modal"
          header={currentIsland?.title}
          onClose={() => setActiveModal(null)}
        >
          <div style={{display: 'flex', flexDirection: 'column', padding: '8px 0', maxHeight: '70vh', overflowY: 'auto', WebkitOverflowScrolling: 'touch'}}>
            {currentIsland?.childrens && currentIsland.childrens.length > 0 ? (
              currentIsland.childrens.map((child) => (
                <a 
                  className="islandCard" 
                  key={child.title} 
                  href={child.link} 
                  target="_blank"
                  style={{textDecoration: 'none', color: 'inherit', margin: '8px 0'}}
                >
                  {child.title}
                </a>
              ))
            ) : (
              <div style={{textAlign: 'center', color: '#666', padding: '20px'}}>
                Нет доступных островов
              </div>
            )}
          </div>
        </ModalCard>
      </ModalRoot>
    </Panel>
  );
};
