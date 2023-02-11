import Details from "../Components/Details"
import './DataFetching.css'

const DUMMY_DATA = [
    {
        id: 1,
        img: "/assets/food.png",
        title: "FOOD ORDER WEB",
        language: "HTML  CSS JAVASCRIPT",
        view:"VIEW PROJECT",
        code:"VIEW CODE"

    },
    {
        id: 2,
        img: "/assets/domestic.png",
        title: "DOMESTIC WED APPLICATION",
        language: "HTML  CSS JAVASCRIPT",
         view: "VIEW PROJECT",
        code: "VIEW CODE"
    },
    {
        id: 3,
        img: "/assets/breaking.png",
        title: "BREAKING NEWS WEB",
        language: "HTML  CSS JAVASCRIPT",
        view: "VIEW PROJECT",
        code: "VIEW CODE"
    },
    {
        id: 4,
        img: "/assets/simple.png",
        title: "LAUNDRY",
        language: "HTML  CSS JAVASCRIPT",
        view: "VIEW PROJECT",
        code: "VIEW CODE"
    },
    {
        id: 5,
        img: "/assets/brain.png",
        title: "MEMORY GAME",
        language: "HTML  CSS JAVASCRIPT",
        view: "VIEW PROJECT",
        code: "VIEW CODE"
    },

    {
        id: 6,
        img: "/assets/art.jpg",
        title: "ART GALLERY SHOWCASE",
        language: "HTML  CSS JAVASCRIPT",
        view: "VIEW PROJECT",
        code: "VIEW CODE"
    }
]

function DataFetching() {
    const fetch = DUMMY_DATA.map((item) => (
            <Details
            key={item.id}
            title={item.title}
            language={item.language}
            img={item.img} 
            view={item.view}
            code={item.code}/>
    
    )
    )
    return (
        // <div className="datafetch">
            <div className="fetch">
                {fetch}
             
          </div>
        // </div>
    )
}

export default DataFetching
