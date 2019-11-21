import React, {Component} from 'react';


class Kursus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paket: "kursus programming",
            materi: "React Js",
            desc: "belajar react js",
            Harga: 200000
        };
    }
    render() {
        return (
            <div id="aa">
                <h1>Output dari prop</h1>
            </div>
        );
    }
}
export default Kursus;