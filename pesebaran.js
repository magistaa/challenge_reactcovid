import React from 'react';

class Pesebaran extends React.Component {
    render() {
        return (
            <div>
                <br />
                <center>
                    <table class="table">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Provinsi</th>
                                <th scope="col">Total Kasus</th>
                                <th scope="col">Meninggal</th>
                                <th scope="col">Sembuh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Jawa Timur</th>
                                <td>41.076</td>
                                <td>2.990</td>
                                <td>33.575</td>
                            </tr>
                            <tr>
                                <th scope="row">Jawa Tengah</th>
                                <td>19.754 </td>
                                <td>1.272</td>
                                <td>13.306</td>
                            </tr>
                            <tr>
                                <th scope="row">Jawa Barat</th>
                                <td>17.502</td>
                                <td>319</td>
                                <td>10.167</td>
                            </tr>
                        </tbody>
                        </table>
                    </table>

                    <a href="/" class="btn btn-primary">Kembali </a>

                </center>
            </div>
        )
    }
}

export default Pesebaran;


/*<section class="map">
<iframe width="600" height="450" frameborder="0"
src="https://www.google.com/maps/embed/v1/place?q=perum%20pucang%20indah%20pasuruan&key=AIzaSyBHUp6MgwtzmvGuzOakqf2mdvY4-HneDX4" 
allowfullscreen></iframe>
</section>*/
