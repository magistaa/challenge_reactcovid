import React from 'react';

class Beranda extends React.Component {
    render() {
        return (

            <div>
                <br />
                <div class="alert alert-info" role="alert">
                    <center><h2>Selamat Datang Di Website Pantauan Covid-19</h2>
                        <p>Website ini akan digunakan untuk memantau perkembangan covid 19 yang telah menyebar ke
                        seluruh indonesia, disini kalian bisa melihat data covid 19 dan protokol kesehatanya.
                    </p>
                    </center>
                </div>
                <div className="container">

                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h2>COVID-19</h2></div>
                        <div class="card-body">
                            <h5 class="card-title">Apa itu covid 19 ?</h5>
                            <p class="card-text">COVID-19 (coronavirus disease 2019) 
                            adalah jenis penyakit baru yang disebabkan oleh virus dari 
                            golongan coronavirus, yaitu SARS-CoV-2 yang juga sering disebut 
                            virus Corona.</p>
                            <p>Khusus untuk COVID-19, masa inkubasi belum diketahui secara pasti. 
                               Namun, rata-rata gejala yang timbul setelah 2-14 hari setelah virus 
                               pertama masuk ke dalam tubuh. Di samping itu, metode transmisi COVID-19 
                               juga belum diketahui dengan pasti. Awalnya, virus corona jenis COVID-19 
                               diduga bersumber dari hewan. Virus corona COVID-19 merupakan virus yang beredar 
                               pada beberapa hewan, termasuk unta, kucing, dan kelelawar. </p>
                            <p>Virus corona bisa menimbulkan beragam gejala pada pengidapnya. 
                               Gejala yang muncul ini bergantung pada jenis virus corona yang menyerang,
                               dan seberapa serius infeksi yang terjadi.</p>
                            <br />
                            <p class="card-text">Gejala yang paling umum:
                           <p> - demam </p>
                           <p> - batuk kering</p>
                           <p> - kelelahan</p>
                           <br/>
                            <p>Gejala yang sedikit tidak umum:</p>
                            <p>- rasa tidak nyaman dan nyeri</p>
                            <p>- nyeri tenggorokan</p>
                            <p>- diare</p>
                            <p>- konjungtivitis (mata merah)</p>
                            <p>- sakit kepala</p>
                            <p>- hilangnya indera perasa atau penciuman</p>

                            </p>


                        </div>
                    </div>
                </div>



                <div className="container">
                    <br></br>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <center>
                                    <div class="card-border">
                                        <div class="card-header">Protokol</div>
                                        <div class="card-body">
                                            <h5 class="card-title"><center>Yuk lihat protokol kesehatan</center></h5>
                                            <br />
                                            <a href="Protokol" class="btn btn-primary">Cek Protokol</a>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <center>
                                    <div class="card-border">
                                        <div class="card-header">Pesebaran</div>
                                        <div class="card-body">
                                            <h5 class="card-title"><center>Yuk intip pesebaran covid 19</center></h5>
                                            <br />
                                            <a href="Pesebaran" class="btn btn-primary">Cek Pesebaran</a>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Beranda;