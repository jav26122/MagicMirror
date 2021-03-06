/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Cuyahoga Falls",
				locationID: "5151613", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "ec542b438fc886fb3e30b83c4b66a37d",
				units: "imperial",
				roundTemp: true,
				degreeLabel: true,
				timeFormat: 12,
				showPeriod: true,
				showHumidity: true,
			}
		},
		{
			module: "MMM-SystemStats",
			position: "bottom_left",
			config: {
				updateInterval: 2000
			}
		},
		{
			module: "MMM-NetworkScanner",
			position: "bottom_right",
			config: {
				showLastSeen: true,
				colored: true,
				updateInterval: 10,
				debug: true,
				showLastSeenWhenOffline: true,
				devices: [
					{
						macAddress: "c0:d2:dd:e8:72:2b",
						name: "Jaret",
						icon: "male",
						color: "#1800FF"
					},
					{
						macAddress: "c0:d2:dd:e8:7b:d5",
						name: "Audrey",
						icon: "female",
						color: "#0FFF00"
					}
				],
				residents: ["Jaret", "Audrey"]
			}
		}

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
