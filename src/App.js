import React from "react";
import GuidHeader from "./components/GuidHeader";
import GuidGenerator from "./components/GuidGenerator";

class App extends React.Component {

    render() {

        return (
            <React.Fragment>

                    <div className="bg-gray-100 h-screen font-sans">

                        <div className="container mx-auto">

                            <GuidHeader />
                                <GuidGenerator />

                        </div>

                    </div>

            </React.Fragment>
        );

    }
}

export default App;