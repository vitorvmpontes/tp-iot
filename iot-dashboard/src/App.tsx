// App.tsx
import React from "react";
import Header from "./components/Header";
import View from "./views/view";
import ClassificacaoList from "./components/ImagemDisplay";
import "./style.css"; 
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <View>
        <ClassificacaoList />
      </View>
      <Footer/>
    </div>
  );
};

export default App;