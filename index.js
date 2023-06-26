import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import "./styles/style.css"

function Page() {
    return (
        <div className="behindAll">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));