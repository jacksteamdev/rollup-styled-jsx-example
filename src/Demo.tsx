import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div id="test">
            <h1>Header</h1>
            <style jsx>{`
                #test {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 64px;
                    background: #181818;
                }
            `}</style>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
