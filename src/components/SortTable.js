import React from 'react';
import data from '../db.json';
import './style.css';

function SortTable() {
    data.sort(function (a, b) {
        if (a.harga === b.harga && a.rating > b.rating) {
          return b.rating - a.rating;
        } else if (a.rating === b.rating && a.likes > b.likes) {
          return b.likes - a.likes;
        } else {
          return a.harga - b.harga;
        }
      });

    return (
        <div className='filter'>
            <table>
                <thead>
                    <th>nama</th>
                    <th>harga</th>
                    <th>rating</th>
                    <th>likes</th>
                </thead>
                <tbody>
                    {data.map((data) => (
                        <tr key={data.id}>
                            <td>{data.nama}</td>
                            <td>{data.harga}</td>
                            <td>{data.rating}</td>
                            <td>{data.likes}</td>
                        </tr>
                    )
                    )
                    }

                </tbody>

            </table>
        </div>
    )
}

export default SortTable