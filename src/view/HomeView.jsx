import React from 'react'
import '../assets/css/app.css'
import Header from "../component/Header"
import HomeCardView from "../component/HomeCardView"
import TitleBar from "../component/TitleBar"

class HomeView extends React.Component {
  render() {
    return (
      <div className="app">
        <Header page="home" screen="Anfragen" />

        <TitleBar title="März 2018" />
        <HomeCardView
        	text="Berliner Grune Woche"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="Berlin"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Sp"
        	totalBookable="11"
        	euro="384"
        />

        <HomeCardView
        	text="Berliner Grune Woche 2"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="Berlin"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Sp"
        	totalBookable="5"
        	euro="500"
        />

        <HomeCardView
        	text="Berliner 3"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="America"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Ab"
        	totalBookable="20"
        	euro="200"
        />

        <HomeCardView
        	text="Berliner 4"
        	date="Mo, 01.04 - Fr, 21.03"
        	location="America"
        	subtext="US"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Ab"
        	totalBookable="20"
        	euro="205"
        />

        <HomeCardView
        	text="Berliner 5"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="America"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Ab"
        	totalBookable="20"
        	euro="200"
        />

        <HomeCardView
        	text="Berliner 6"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="America"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Ab"
        	totalBookable="20"
        	euro="200"
        />

        <HomeCardView
        	text="Berliner 7"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="America"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Ab"
        	totalBookable="20"
        	euro="200"
        />

        <HomeCardView
        	text="Berliner 8"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="America"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Ab"
        	totalBookable="20"
        	euro="200"
        />

        <HomeCardView
        	text="Berliner 9"
        	date="Mo, 01.03 - Fr, 21.03"
        	location="America"
        	subtext="Anfahrtskostenpauschal"
        	jobtag1="Ho"
        	jobtag2="Pr"
        	jobtag3="Ab"
        	totalBookable="20"
        	euro="200"
        />

      </div>
    );
  }
}

export default HomeView;
