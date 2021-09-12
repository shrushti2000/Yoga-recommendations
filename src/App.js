import { useState } from "react";
import "./styles.css";

const data = {
  Diabetes: [
    {
      title: "Ardha Matsyendrasana",
      description:
        "People suffering from diabetes can do this asana to control body sugar level.",
      image:
        "https://www.yogaindailylife.org/system/images/Level-5/Ardha-Matsyendrasana/Ardha-Matsyendrasana-04-800.jpg"
    },
    {
      title: "Chakrasana/ Wheel pose",
      description:
        "Chakrasana can help people suffering from diabetes.Chakrasana or Urdhva Dhanurasana is an asana in yoga as exercise. It is a backbend and is the first pose of the finishing sequence in Ashtanga Vinyasa Yoga. It gives great flexibility to the spine. ",
      image:
        "https://lh3.googleusercontent.com/SZWjHtYfAN0oU3YdcN43ui8jsfX-wndsi69PTQ55VO6FiXVaMGYwUlHXoQISAvLv31M6kQUr5ZtsL1L62IT2pWKgutupNr82qLNP1x7mUrySTcoLlTamzIFZRR3SCHSLpDqRpESu"
    },
    {
      title: "Viparita Karani",
      description:
        "Viparita Karani or legs up the wall pose is both an asana and a mudra in hatha yoga. In modern yoga as exercise, it is commonly a fully supported pose using a wall and sometimes a pile of blankets.",
      image:
        "https://freedomgenesis.com/wp-content/uploads/2019/11/graphic-of-person-doing-legs-up-the-wall-pose.jpg"
    }
  ],
  Thyroid: [
    {
      title: "Halasana/ Plough pose",
      description:
        "This pose will give compression to the neck and stimulates the thyroid glands.",
      image: "https://nexoye.com/wp-content/uploads/2020/05/Halasana.jpg"
    },
    {
      title: "Matsyasana/ Fish pose",
      description:
        "Matsyasana provides adequate stretching to the neck triggering the thyroid gland.",
      image:
        "https://arogyayogaschool.com/blog/wp-content/uploads/2017/12/Matsyasana-The-Fish-Pose.jpg"
    }
  ],
  PCOS: [
    {
      title: "Dhanurasana/ Bow pose",
      description: "This posture helps in galvanising reproductive organs",
      image:
        "https://1.bp.blogspot.com/-Ge27teteyOc/XkFrbTiXhfI/AAAAAAAAEIE/n5n36DvDqyAvpDq2FtbBahaZm5uXeeyoACLcBGAsYHQ/s640/dhanurasan.webp"
    },

    {
      title: "Bhujangasana/ Cobra pose",
      description: "It helps in activating ovarian functions.",
      image:
        "https://225508-687544-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/bhujangasana.jpg"
    }
  ],
  Indigestion: [
    {
      title: "Apanasana",
      description:
        "If you are battling any sort of stomach disorder then this pose can relieve you from constipation, indigestion, bloating and acidity. It is beneficial for digestion and helps in removing toxic substances from the entire system.  ",
      image:
        "https://pranamaya.com/wp-content/uploads/2016/11/apanasana-yoga-pose-supine-knees-260nw-1442976857.jpg"
    }
  ],
  Arthritis: [
    {
      title: "Child Pose/ Shishuasana",
      description: "This asana can help you straighten your vertebra.",
      image: "https://www.boldsky.com/img/2016/09/11-16-1474019707.jpg"
    },
    {
      title: "Adho Mukha Svanasana/ Downward facing dog pose",
      description:
        "It improves flexibility of the body and stretches the spine.",
      image:
        "https://www.boldsky.com/img/2016/12/adhomukhasavasana-16-1481877145.jpg"
    }
  ],
  "Liver problems": [
    {
      title: "Ardha Bhekasana",
      description:
        "This exercise can help people who are suffering from liver problems.",
      image:
        "https://www.ekhartyoga.com/media/image/articles/Ardha-Bhekasana-Half-Frog-pose-Variation.jpg"
    },
    {
      title: "Parighasana",
      description: "It is beneficial for liver ailments.",
      image:
        "https://www.finessyoga.com/wp-content/uploads/2018/02/Parighasana.png"
    }
  ],
  Migraine: [
    {
      title: "Padmasana/ Lotus pose",
      description: "This asana relaxes the mind and alleviates headache.",
      image: "https://mysticalbee.com/wp-content/uploads/2020/04/Padmasana.jpg"
    },
    {
      title: "Sirsasana",
      description:
        "It is also known as King of all asanas and increases the flow of blood in brain. If the Queen of Belgium can perform this exercise in her 80's then you can definitely make an attempt.",
      image: "http://www.theyogshala.com/images/blogimages/1463061830.jpg"
    }
  ]
};
var diseases = Object.keys(data);
export default function App() {
  const [disease, setDisease] = useState("");
  const [arr, setArr] = useState([]);

  function diplayData(item) {
    setDisease(item);
    setArr(data[item]);
  }
  return (
    <>
      <div className="App">
        <h1 id="title">Yoga the the Path of wellness!</h1>
        <h5 id="sub-title">
          Yoga is the art of living life through the mental, spiritual and
          physical path. It helps in achieving stability!Many diseases can be
          cured through Yoga and can help you live a healthy life. Here are few
          diseases which can be cured through yoga.Click on them to get
          started..
        </h5>
        {diseases.map((item) => (
          <span
            id="disease-titles"
            onClick={() => diplayData(item)}
            style={{ margin: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        ))}
        <h1 id="main-disease-heading">{disease}</h1>
        {arr.map((item) => (
          <div>
            <h1 class="disease-title">{item.title}</h1>
            <p class="desc">{item.description}</p>
            <img
              style={{ width: "20rem", height: "20rem" }}
              src={item.image}
              alt="hello"
            />
          </div>
        ))}
      </div>
      <div class="footer">
        <p class="footer-heading">Connect with me</p>
        <div class="socialmedia">
          <a href="https://github.com/shrushti2000">
            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/Shrushti2000">
            <i class="fa fa-twitter fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/shrushti-polekar-8255471a6/">
            <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
}
