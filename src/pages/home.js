import React, { useState, useEffect } from "react";
// import Player from "../components/player";
// import Menu from "../components/menu";
import MenuTest from "../components/menuTest";
import AlbumCover from "../components/albumCover";
import RightMenu from "../components/rightMenu";
const list = [
  {
    src: [
      "https://www.youtube.com/watch?v=d3clrkLNTSA",
      "https://www.youtube.com/watch?v=1LeOO9P2yL4",
      "https://www.youtube.com/watch?v=6vThgFwt4Kg",
      "https://www.youtube.com/watch?v=D9OhQVuupdY",
      "https://www.youtube.com/watch?v=E3uWHtUkUoI",
      "https://www.youtube.com/watch?v=uU7YPyQ9ldA",
      "https://www.youtube.com/watch?v=8h3SusINdAI",
      "https://www.youtube.com/watch?v=jQK3sRJ2ugg",
      "https://www.youtube.com/watch?v=tx1BXRP0wrI",
      "https://www.youtube.com/watch?v=kNh-Nyt1ywU",
      "https://www.youtube.com/watch?v=HtyB5Wiq_Mw",
      "https://www.youtube.com/watch?v=peD-Xbfkeec",
      "https://www.youtube.com/watch?v=UOEXxLuGeIw",
      "https://www.youtube.com/watch?v=xcDMoKfw-0A",
      "https://www.youtube.com/watch?v=ru2Bo_Ud0ms",
      "https://www.youtube.com/watch?v=ipGNuFXubL8",
      "https://www.youtube.com/watch?v=2QCecWuOC18",
      "https://www.youtube.com/watch?v=by2pM_0Sf8c",
      "https://www.youtube.com/watch?v=QjB3qextZbQ"
    ],
    film: "Blade Runner 2049 ",
    naziv: [
      "2049",
      "Sapper's Tree",
      "Flight to LAPD",
      "Rain",
      "Wallace",
      "Memory",
      "Mesa",
      "Orphanage",
      "Furnace",
      "Someone Lived This",
      "Joi",
      "Pilot",
      "Hijack",
      "That's Why We Believe",
      "Her Eyes Were Green",
      "Sea Wall",
      "All the Best Memories Are Hers",
      "Tears in the Rain",
      "Blade Runner"
    ],
    producer: "Hans Zimmer",
    img: [
      "https://blackgirlnerds.com/wp-content/uploads/2017/08/BR2049-Key-Art-US-8.24-1.jpg"
    ]
  },
  {
    src: [
      "https://www.youtube.com/watch?v=M2oVRx0ymEI",
      "https://www.youtube.com/watch?v=dkWm59GfLz4",
      "https://www.youtube.com/watch?v=_-_4V0lrXag",
      "https://www.youtube.com/watch?v=78u2ywj2uLk",
      "https://www.youtube.com/watch?v=3Wj55fWckkU",
      "https://www.youtube.com/watch?v=aox166xOFbg",
      "https://www.youtube.com/watch?v=HAAmZiu1CZA",
      "https://www.youtube.com/watch?v=o_Ay_iDRAbc",
      "https://www.youtube.com/watch?v=64N9ldXYaZ8",
      "https://www.youtube.com/watch?v=UopnvK9Hnyk",
      "https://www.youtube.com/watch?v=C2PqVb-PHwA",
      "https://www.youtube.com/watch?v=er9mOEYI_8Y",
      "https://www.youtube.com/watch?v=bJFMnN_4mPM",
      "https://www.youtube.com/watch?v=l-GUg4a3_1Q",
      "https://www.youtube.com/watch?v=KckEf9KhMHo",
      "https://www.youtube.com/watch?v=xYohE05wNzM"
    ],
    film: "Interstellar",
    naziv: [
      "Dreaming of the Crash",
      "Cornfiled Chase",
      "Dust",
      "Day one",
      "Stay",
      "Message from Home",
      "The Wormhole",
      "Mountains",
      "Afraid of Time",
      "A Place Among the Stars",
      "Running Out",
      "I'm Going Home",
      "Coward",
      "Detach",
      "S.T.A.Y",
      "Where We're Going"
    ],
    producer: "Hans Zimmer",
    img: ["https://i.redd.it/l5i9ebixj8fx.jpg"]
  },
  {
    src: [
      "https://www.youtube.com/watch?v=b8OELzmpgZo",
      "https://www.youtube.com/watch?v=tFXYuw96d0c",
      "https://www.youtube.com/watch?v=vlEN8svyHj8",
      "https://www.youtube.com/watch?v=j1eI-7XWjho",
      "https://www.youtube.com/watch?v=HitDB-Be_74",
      "https://www.youtube.com/watch?v=bRq4cnqQUdY",
      "https://www.youtube.com/watch?v=IGzJFJRkmCE",
      "https://www.youtube.com/watch?v=DSx_N18TWjs",
      "https://www.youtube.com/watch?v=k7D5Sy8XfJE",
      "https://www.youtube.com/watch?v=aFIXKXYfEy0",
      "https://www.youtube.com/watch?v=bv66O1aGrjI",
      "https://www.youtube.com/watch?v=Lfrn1oGdB6o",
      "https://www.youtube.com/watch?v=M4dUiBfMQVU",
      "https://www.youtube.com/watch?v=Tzer8ZCW-Ys",
      "https://www.youtube.com/watch?v=yRvVyMuWbpM",
      "https://www.youtube.com/watch?v=SgkxlQyw03A",
      "https://www.youtube.com/watch?v=P3L9n-HG5xY",
      "https://www.youtube.com/watch?v=A3F2pr2FbfQ",
      "https://www.youtube.com/watch?v=tj_v6RvGMh4",
      "https://www.youtube.com/watch?v=hY5-33ZycVg",
      "https://www.youtube.com/watch?v=TkYspvuoZe0",
      "https://www.youtube.com/watch?v=ibZJ0Yqh2Ng"
    ],
    film: "Tron",
    naziv: [
      "Overture",
      "The Grid",
      "The Son of Flynn",
      "Recognizer",
      "Armory ",
      "Arena",
      "Rinzler",
      "The Game Has Changed",
      "Outlands",
      "Adagio For TRON",
      "Nocturne",
      "End of Line ",
      "Derezzed",
      "Fall",
      "Solar Sailer",
      "Rectifier",
      "Disc Wars",
      "C.L.U.",
      "Flynn Lives",
      "TRON Legacy (End Titles)",
      "Finale",
      "Arrival"
    ],
    producer: "Daft Punk",
    img: ["https://i.ebayimg.com/00/s/MTUwMFgxMDEz/z/asgAAOSwImRYj9VH/$_57.jpg"]
  },
  {
    src: [
      "https://www.youtube.com/watch?v=8vG-hHPYvXg",
      "https://www.youtube.com/watch?v=L1Cmjio99oI",
      "https://www.youtube.com/watch?v=8pGCLf5Ufgg",
      "https://www.youtube.com/watch?v=2Oy-zOo9g1c",
      "https://www.youtube.com/watch?v=N8YH8W919gw",
      "https://www.youtube.com/watch?v=W33kLZgBd_w",
      "https://www.youtube.com/watch?v=ztFmXwJDkBY",
      "https://www.youtube.com/watch?v=b4QfgTyooqA",
      "https://www.youtube.com/watch?v=S0mtcpV16Xs",
      "https://www.youtube.com/watch?v=pzlBrjNVIhY",
      "https://www.youtube.com/watch?v=tV1h6JbI9bI",
      "https://www.youtube.com/watch?v=ITCYt3Mp59I",
      "https://www.youtube.com/watch?v=1RNilyEnh68",
      "https://www.youtube.com/watch?v=rjw9AbHFMow",
      "https://www.youtube.com/watch?v=PujiyiLm10M",
      "https://www.youtube.com/watch?v=uVzy3vnIfQ8",
      "https://www.youtube.com/watch?v=gjOsVm3QfeA",
      "https://www.youtube.com/watch?v=Erwvh8h-DpY"
    ],
    film: "Phantom Thread",
    naziv: [
      "Phantom Thread I",
      "The Hem",
      "Sandalwood I",
      "The Tailor of Fitzrovia",
      "Alma",
      "Boletus Felleus",
      "Phantom Thread II",
      "Catch Hold",
      "That's As May Be",
      "Phantom Thread III",
      "I'll Follow Tomorrow",
      "House of Woodcock",
      "Sandalwood II",
      "Barbara Rose",
      "Endless Superstition",
      "Phantom Thread IV (feat. Daniel Pioro)",
      "For the Hungry Boy",
      "Never Cursed"
    ],
    producer: "Christian Wright",
    img: [
      "https://m.media-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg"
    ]
  },
  {
    src: [
      "https://www.youtube.com/watch?v=hqIu3Kwbeu8",
      "https://www.youtube.com/watch?v=f4RJLJ8BfoI",
      "https://www.youtube.com/watch?v=DlQ-XU2PV7s",
      "https://www.youtube.com/watch?v=HsODDQGaqqM",
      "https://www.youtube.com/watch?v=nEUoNioY0vc",
      "https://www.youtube.com/watch?v=xpfUA2bG6yY",
      "https://www.youtube.com/watch?v=kRGPbG8GNTg",
      "https://www.youtube.com/watch?v=SKPrgEpf2xs",
      "https://www.youtube.com/watch?v=uap73IGu_38",
      "https://www.youtube.com/watch?v=3koOPzooRwM",
      "https://www.youtube.com/watch?v=SHAEOsJUzng",
      "https://www.youtube.com/watch?v=utLzVzjpUCY",
      "https://www.youtube.com/watch?v=LjEcqPx0EwE",
      "https://www.youtube.com/watch?v=8z5-Wum2enQ",
      "https://www.youtube.com/watch?v=Hbo6sX6khDU",
      "https://www.youtube.com/watch?v=ArOF7uHzNHM",
      "https://www.youtube.com/watch?v=pFe_whUmugI",
      "https://www.youtube.com/watch?v=gSwbYHJYskM",
      "https://www.youtube.com/watch?v=VUPT5qYUudo",
      "https://www.youtube.com/watch?v=OVxin3thO2s",
      "https://www.youtube.com/watch?v=TBhoth5Ip88",
      "https://www.youtube.com/watch?v=JmKvjeXAGVA"
    ],
    film: "Joker",
    naziv: [
      "Call Me Joker",
      "Hoyt's Office ",
      "Defeated Clown",
      "Following Sophie",
      "Penny in the Hospital",
      "Young Penny",
      "Meeting Bruce Wayne",
      "Hiding in the Fridge",
      "A Bad Comedian",
      "Arthur Comes to Sophie",
      "Looking for Answers",
      "Penny Taken to the Hospital ",
      "Subway",
      "Bathroom Dance",
      "Learning How to Act Normal",
      "Confession",
      "Escape from the Train",
      "Call Me Joker",
      "That's Life [Instrumental Version]",
      "Smile [Instrumental Version]",
      "If You're Happy and You Know It",
      "The Live! with Murray Franklin Theme"
    ],
    producer: "Hildur Guðnadóttir",
    img: [
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    ]
  },
  {
    src: [
      "https://www.youtube.com/watch?v=CIaIJoG5EO4",
      "https://www.youtube.com/watch?v=1P_OXJoie70",
      "https://www.youtube.com/watch?v=YcwRv1JPWNU",
      "https://www.youtube.com/watch?v=Z1vp9HgVL6I",
      "https://www.youtube.com/watch?v=kKNvT0iDM_A",
      "https://www.youtube.com/watch?v=mTmjEDi2NOY",
      "https://www.youtube.com/watch?v=O-DpKlmyB5c",
      "https://www.youtube.com/watch?v=ZkQXbCG09Aw",
      "https://www.youtube.com/watch?v=4ZMsz3gDrwA",
      "https://www.youtube.com/watch?v=MXYLHNTsVPA",
      "https://www.youtube.com/watch?v=5Luuy3SjDbM"
    ],
    film: "The last Samurai",
    naziv: [
      "A way of life",
      "Spectres in the Fog",
      "Taken",
      "A hard teacher",
      "To know my enemy",
      "Idyll´s end",
      "Safe passage",
      "Ronin",
      "Red Warrior",
      "The way of the sword",
      "A small measure of peace"
    ],
    producer: "Hans Zimmer",
    img: [
      "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_.jpg"
    ]
  }
];

const Home = () => {
  const [playlist, setPlaylist] = useState(list[0]);
  const [Lenght, setLenght] = useState(playlist.src.lenght - 1);
  const [song, setSong] = useState(playlist.naziv[0]);
  const [on, setOn] = useState(true);
  const [increase, setIncrease] = useState(0);

  useEffect(() => {
    checkLenght();
    console.log(playlist.src.lenght);
  }, [increase]);
  const checkLenght = () => {
    if (increase < 0) {
      setIncrease(0);
      setSong(playlist.naziv[0]);
    }
    //  else if (increase > 18) {
    //   setIncrease(18);
    // }
  };

  return (
    <div>
      <div className="home-flex">
        <MenuTest
          list={list}
          setPlaylist={setPlaylist}
          playlist={playlist}
          on={on}
          setIncrease={setIncrease}
          setSong={setSong}
        />
        <AlbumCover
          song={song}
          increase={increase}
          playlist={playlist}
          on={on}
        />
        <RightMenu
          playlist={playlist}
          setSong={setSong}
          increase={increase}
          setIncrease={setIncrease}
          song={song}
        />
      </div>
    </div>
  );
};

export default Home;
