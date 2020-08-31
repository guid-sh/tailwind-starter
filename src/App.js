import React from "react";
import GuidHeader from "./components/GuidHeader";
import GuidGenerator from "./components/GuidGenerator";
import GuidTabs from "./components/Tabs/GuidTabs";

class App extends React.Component {

    render() {

        return (
            <React.Fragment>

                    <div className="bg-gray-100 font-sans">

                        <div className="container mx-auto py-32">

                            <GuidHeader />
                                <GuidGenerator />

                                <GuidTabs />

                        </div>

                    </div>

            </React.Fragment>
        );

    }
}

export default App;