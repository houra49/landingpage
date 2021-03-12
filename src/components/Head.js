import React from 'react';
import './Head.css'
const Head = () => {
    return (
        <header>
            <div className="heads">
                <h3 id="hello">Hello There</h3>
                <h1 id="glint">We Are Glint</h1>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt nemo, nam aspernatur
                autem eligendi exercitationem natus perferendis quos non corporis laborum magni.
                Possimus vel natus consectetur dolore. Assumenda, at.
            </p>
            </div>
            <table className="table">
                <tr>
                    <th>127</th>
                    <th>1505</th>
                    <th>109</th>
                    <th className="td4">102</th>
                </tr>
                <tr>
                    <td className="th">ward recieved</td>
                    <td>Cups of Coffee</td>
                    <td>Projects Completed</td>
                    <td className="td4">Happy Clients</td>
                </tr>

            </table>
        </header>
    );
}
export default Head;