import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/models/establishment.model';

@Component({
  selector: 'james-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.scss']
})
export class EstablishmentListComponent implements OnInit {

  public establishments: Array<Establishment> = [
    {
      "id": "5e34937af59dabb9a2c4c05f",
      "index": 0,
      "guid": "7d35ec3a-1462-49cc-adec-1726f98862e1",
      "picture": "http://placehold.it/32x32",
      "name": "Gink",
      "email": "contato@gink.com",
      "phone": "+1 (859) 505-2620",
      "address": "808 Ford Street, Westerville, Nevada, 6937",
      "registered": "Sunday, September 18, 2016 10:04 AM",
      "latitude": "37.849767",
      "longitude": "-58.807759"
    },
    {
      "id": "5e34937ab389aaf14cd62d05",
      "index": 1,
      "guid": "0fd467f7-5af4-4f7a-89f5-273d4032e153",
      "picture": "http://placehold.it/32x32",
      "name": "Geeketron",
      "email": "contato@geeketron.com",
      "phone": "+1 (984) 548-3600",
      "address": "698 Hendrickson Place, Valle, Missouri, 5695",
      "registered": "Wednesday, November 28, 2018 12:47 PM",
      "latitude": "84.233418",
      "longitude": "-1.928457"
    },
    {
      "id": "5e34937a6f4589a5b9c0d117",
      "index": 2,
      "guid": "d02092a0-9d20-4f78-9332-c69d7527d061",
      "picture": "http://placehold.it/32x32",
      "name": "Combogene",
      "email": "contato@combogene.com",
      "phone": "+1 (909) 527-2582",
      "address": "143 Berkeley Place, Machias, Palau, 3958",
      "registered": "Sunday, November 27, 2016 11:27 PM",
      "latitude": "-72.727928",
      "longitude": "-68.08458"
    },
    {
      "id": "5e34937a65f306cde33e4f58",
      "index": 3,
      "guid": "8f56b01f-a8ba-45e6-8115-ba461ed89b5f",
      "picture": "http://placehold.it/32x32",
      "name": "Kegular",
      "email": "contato@kegular.com",
      "phone": "+1 (806) 484-2330",
      "address": "265 Cropsey Avenue, Yardville, Michigan, 3580",
      "registered": "Thursday, July 24, 2014 12:24 AM",
      "latitude": "-63.544775",
      "longitude": "142.010713"
    },
    {
      "id": "5e34937a76aa7cc47d5b2926",
      "index": 4,
      "guid": "5cc4beb4-8ea5-4a38-8900-6a80f1e136d6",
      "picture": "http://placehold.it/32x32",
      "name": "Trollery",
      "email": "contato@trollery.com",
      "phone": "+1 (868) 595-2860",
      "address": "549 Evans Street, Marshall, Idaho, 2080",
      "registered": "Saturday, January 25, 2020 8:13 AM",
      "latitude": "74.201336",
      "longitude": "-95.652089"
    },
    {
      "id": "5e34937a5239478b6570d013",
      "index": 5,
      "guid": "e0d3148a-3581-4f0f-a0a8-025b22dd3173",
      "picture": "http://placehold.it/32x32",
      "name": "Prosure",
      "email": "contato@prosure.com",
      "phone": "+1 (992) 505-3705",
      "address": "633 Gain Court, Oberlin, Tennessee, 6214",
      "registered": "Saturday, August 2, 2014 4:00 PM",
      "latitude": "78.256137",
      "longitude": "7.712324"
    },
    {
      "id": "5e34937a5b40bbeef808f554",
      "index": 6,
      "guid": "7ac32c1b-b469-4d03-a4b6-3840b4ac534f",
      "picture": "http://placehold.it/32x32",
      "name": "Dogtown",
      "email": "contato@dogtown.com",
      "phone": "+1 (815) 551-3342",
      "address": "262 Fane Court, Camas, Montana, 1658",
      "registered": "Monday, February 16, 2015 2:54 AM",
      "latitude": "57.95049",
      "longitude": "19.122215"
    },
    {
      "id": "5e34937a4ad1d86469f52f22",
      "index": 7,
      "guid": "e8fc2d55-9f09-43d6-9b38-75776f65f603",
      "picture": "http://placehold.it/32x32",
      "name": "Namegen",
      "email": "contato@namegen.com",
      "phone": "+1 (972) 509-3681",
      "address": "745 Adelphi Street, Washington, New Hampshire, 3283",
      "registered": "Thursday, February 14, 2019 6:57 PM",
      "latitude": "19.587713",
      "longitude": "91.929174"
    },
    {
      "id": "5e34937ab3660ed4776ced86",
      "index": 8,
      "guid": "c3a4e4ba-2fe7-4f05-bfd5-3dce153641d5",
      "picture": "http://placehold.it/32x32",
      "name": "Isosure",
      "email": "contato@isosure.com",
      "phone": "+1 (833) 598-2457",
      "address": "629 Bergen Street, Calvary, Federated States Of Micronesia, 8653",
      "registered": "Wednesday, October 17, 2018 11:06 AM",
      "latitude": "50.965128",
      "longitude": "113.417994"
    },
    {
      "id": "5e34937ac651702ed1d56e05",
      "index": 9,
      "guid": "ef54b5ba-9eb0-42ff-b3e9-353d540b6514",
      "picture": "http://placehold.it/32x32",
      "name": "Geofarm",
      "email": "contato@geofarm.com",
      "phone": "+1 (848) 522-2626",
      "address": "492 Bushwick Place, Seymour, New Jersey, 4326",
      "registered": "Wednesday, April 15, 2015 12:36 PM",
      "latitude": "-29.06241",
      "longitude": "-83.790542"
    },
    {
      "id": "5e34937acd5b7190b1fad16e",
      "index": 10,
      "guid": "30552674-f5c2-4079-a8cc-0b2df66f3ba6",
      "picture": "http://placehold.it/32x32",
      "name": "Kraggle",
      "email": "contato@kraggle.com",
      "phone": "+1 (844) 549-2280",
      "address": "509 Lake Place, Columbus, Oregon, 3291",
      "registered": "Saturday, June 17, 2017 8:05 AM",
      "latitude": "-36.415493",
      "longitude": "118.859696"
    },
    {
      "id": "5e34937a1043e0debe8cf384",
      "index": 11,
      "guid": "7579b499-92d7-484e-aae9-c37bf861d5b2",
      "picture": "http://placehold.it/32x32",
      "name": "Unq",
      "email": "contato@unq.com",
      "phone": "+1 (819) 512-3319",
      "address": "703 Navy Street, Maplewood, Nebraska, 3774",
      "registered": "Tuesday, November 5, 2019 4:31 AM",
      "latitude": "-41.457288",
      "longitude": "-8.605907"
    },
    {
      "id": "5e34937acf4f446eac4309ab",
      "index": 12,
      "guid": "53cc9e0c-ae99-4e1c-9728-1a3bdbd70fb5",
      "picture": "http://placehold.it/32x32",
      "name": "Minga",
      "email": "contato@minga.com",
      "phone": "+1 (989) 422-3305",
      "address": "418 Richards Street, Shaft, Utah, 1834",
      "registered": "Sunday, December 13, 2015 7:43 AM",
      "latitude": "-88.048418",
      "longitude": "-77.706714"
    },
    {
      "id": "5e34937a00e9d35e3e44969c",
      "index": 13,
      "guid": "015748e5-9232-4024-a077-5a2ccc8372e1",
      "picture": "http://placehold.it/32x32",
      "name": "Toyletry",
      "email": "contato@toyletry.com",
      "phone": "+1 (893) 567-2943",
      "address": "401 Harrison Avenue, Neibert, Illinois, 4743",
      "registered": "Wednesday, April 15, 2015 12:32 AM",
      "latitude": "48.837396",
      "longitude": "160.74919"
    },
    {
      "id": "5e34937af89a576bed28f3bf",
      "index": 14,
      "guid": "f89360eb-4811-4aec-a8de-be921a5c6dc1",
      "picture": "http://placehold.it/32x32",
      "name": "Oatfarm",
      "email": "contato@oatfarm.com",
      "phone": "+1 (812) 533-3044",
      "address": "485 Fairview Place, Zeba, Georgia, 5771",
      "registered": "Tuesday, September 25, 2018 10:13 PM",
      "latitude": "49.839777",
      "longitude": "168.226652"
    },
    {
      "id": "5e34937a14d2e2acfc8284b0",
      "index": 15,
      "guid": "cdc07d26-483c-4d87-b519-d92d500cccaa",
      "picture": "http://placehold.it/32x32",
      "name": "Tourmania",
      "email": "contato@tourmania.com",
      "phone": "+1 (823) 506-2071",
      "address": "757 Beekman Place, Salunga, Kansas, 7216",
      "registered": "Saturday, May 18, 2019 12:43 AM",
      "latitude": "-15.63266",
      "longitude": "-156.250803"
    },
    {
      "id": "5e34937a4089e8e92e0a9d67",
      "index": 16,
      "guid": "5999f8e5-4fa9-4f3e-976a-6afbfe603e48",
      "picture": "http://placehold.it/32x32",
      "name": "Zanilla",
      "email": "contato@zanilla.com",
      "phone": "+1 (807) 470-2734",
      "address": "710 Chester Court, Longoria, New Mexico, 4433",
      "registered": "Friday, November 21, 2014 9:02 PM",
      "latitude": "-64.293059",
      "longitude": "-67.426821"
    },
    {
      "id": "5e34937a1d60dda5d167f90c",
      "index": 17,
      "guid": "e0166e8a-0cbe-40d6-9345-7049292926d2",
      "picture": "http://placehold.it/32x32",
      "name": "Zeam",
      "email": "contato@zeam.com",
      "phone": "+1 (884) 527-3503",
      "address": "703 Krier Place, Kennedyville, Alaska, 4469",
      "registered": "Friday, April 13, 2018 4:56 AM",
      "latitude": "-26.555577",
      "longitude": "147.058085"
    },
    {
      "id": "5e34937a5bbedacd4d1ee488",
      "index": 18,
      "guid": "898e7f05-990a-4015-8440-58b04cc1e033",
      "picture": "http://placehold.it/32x32",
      "name": "Roughies",
      "email": "contato@roughies.com",
      "phone": "+1 (972) 594-2326",
      "address": "356 Fillmore Place, Utting, Wisconsin, 5759",
      "registered": "Thursday, September 13, 2018 2:02 AM",
      "latitude": "57.714881",
      "longitude": "119.946536"
    },
    {
      "id": "5e34937a0433cffee602c35a",
      "index": 19,
      "guid": "9676d8f1-d086-4daa-9eb3-aba5eededa8a",
      "picture": "http://placehold.it/32x32",
      "name": "Telequiet",
      "email": "contato@telequiet.com",
      "phone": "+1 (841) 562-3230",
      "address": "270 Knapp Street, Wyano, Pennsylvania, 5400",
      "registered": "Friday, November 2, 2018 12:01 AM",
      "latitude": "-19.421085",
      "longitude": "-123.527757"
    },
    {
      "id": "5e34937ad1792b45b62565a4",
      "index": 20,
      "guid": "b18ee8ff-2188-4256-994d-2af3d552c7e3",
      "picture": "http://placehold.it/32x32",
      "name": "Talkalot",
      "email": "contato@talkalot.com",
      "phone": "+1 (915) 527-3874",
      "address": "412 Carlton Avenue, Dola, North Dakota, 3768",
      "registered": "Saturday, January 3, 2015 9:59 AM",
      "latitude": "-35.451884",
      "longitude": "-132.572881"
    },
    {
      "id": "5e34937a4bb42cbead0cc2e7",
      "index": 21,
      "guid": "255df3d6-4be1-4386-9ebf-78c29805976b",
      "picture": "http://placehold.it/32x32",
      "name": "Macronaut",
      "email": "contato@macronaut.com",
      "phone": "+1 (908) 421-3559",
      "address": "662 Porter Avenue, Retsof, Kentucky, 7442",
      "registered": "Tuesday, May 23, 2017 12:42 PM",
      "latitude": "62.702298",
      "longitude": "4.580572"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
