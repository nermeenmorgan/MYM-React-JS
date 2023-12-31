import "./portfolio.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../containers/Languages";
import port from "../../assets/portofolio.png";
const arr = [
    {
        id: 1,
        category: "design",
        img: port,
        link: "#",
    },
    {
        id: 2,
        category: "design",
        img: port,
        link: "#",
    },
    { id: 3, category: "design", img: port, link: "#" },
    { id: 4, category: "web", img: port, link: "#" },
    { id: 5, category: "web", img: port, link: "#" },
    { id: 6, category: "web", img: port, link: "#" },
    { id: 7, category: "other", img: port, link: "#" },
    { id: 8, category: "mobile", img: port, link: "#" },
    { id: 9, category: "mobile", img: port, link: "#" },
    { id: 10, category: "mobile", img: port, link: "#" },
];

const Portfolio = () => {
    const [category, setCategory] = useState("all");
    const [data, setData] = useState([]);

    const buttonHandeler = (e) => {
        setCategory(e.target.dataset.category);
    };

    useEffect(() => {
        if (category == "all") {
            setData(arr);
        } else {
            setData(
                arr.filter((item) => {
                    return item.category === category;
                })
            );
        }
    }, [category]);

    return (
        <div className="portfolio my-5 py-3 ">
            <div className="container">
                <div className="port-head" style={{ textAlign: "center" }}>
                    <h2
                        style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                    >
                        <Text tid="home-portfolio.port-head" />
                        <span
                            style={{
                                color: "var(--red-color)",
                                fontSize: "30px",
                                fontWeight: "bold",
                            }}
                        >
                            <Text tid="home-portfolio.port-word" />
                        </span>
                    </h2>
                    <p style={{ color: "var(--grey-color)", fontSize: "18px" }}>
                        <Text tid="home-portfolio.port-para" />
                    </p>
                </div>

                <div className="port-btns mt-3 mb-5">
                    <button
                        className={category === "all" ? "active" : "port-btn "}
                        onClick={buttonHandeler}
                        data-category="all"
                    >
                        <Text tid="home-portfolio.port-btns.all-port" />
                    </button>
                    <button
                        className={
                            category === "design" ? "active" : "port-btn "
                        }
                        onClick={buttonHandeler}
                        data-category="design"
                    >
                        <Text tid="home-portfolio.port-btns.designers" />
                    </button>
                    <button
                        className={
                            category === "mobile" ? "active" : "port-btn "
                        }
                        onClick={buttonHandeler}
                        data-category="mobile"
                    >
                        <Text tid="home-portfolio.port-btns.mobile" />
                    </button>
                    <button
                        className={category === "web" ? "active" : "port-btn "}
                        onClick={buttonHandeler}
                        data-category="web"
                    >
                        <Text tid="home-portfolio.port-btns.web" />
                    </button>
                    <button
                        className={
                            category === "other" ? "active" : "port-btn "
                        }
                        onClick={buttonHandeler}
                        data-category="other"
                    >
                        <Text tid="home-portfolio.port-btns.other" />
                    </button>
                </div>

                <div className="d-flex flex-wrap  gap-3 mb-5 port-container">
                    {data.length > 0 ? (
                        data.slice(0, 8).map((d) => {
                            return (
                                <div key={d.id} className="port">
                                    <div
                                        className="hover-port"
                                        style={{ width: "100%" }}
                                    >
                                        <img
                                            src={d.img}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </div>

                                    <a
                                        href={d.link}
                                        className="port-hover-btn red-btn"
                                    >
                                        <Text tid="home-portfolio.port-hover-btn" />
                                    </a>
                                </div>
                            );
                        })
                    ) : (
                        <h3 style={{ color: "#fff" }}>
                            <Text tid="home-portfolio.not-found" />
                        </h3>
                    )}
                </div>

                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <Link
                        className="red-btn  "
                        to="/projects"
                        style={{
                            width: "30%",
                            minWidth: "fit-content",
                            display: "block",
                            margin: "auto",
                        }}
                    >
                        <Text tid="home-portfolio.port-btn" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
