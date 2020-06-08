// import React, { Component } from 'react'
// import {View,Text,StyleSheet,TouchableOpacity,Button,Image} from 'react-native'
// class Home extends Component {
    
    
//     render() {
//         return (
//             <Text>
//                 hello
//             </Text>
                
            

//         )
//     }
// }



// export default Home
import ValidationComponent from 'react-native-form-validator';
import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput,numberHolder,TouchableHighlight,Button,Image} from 'react-native'


export default class aboutUs extends ValidationComponent {
    constructor(props){
        super(props);
        this.state = {name : "My name", email: "titi@gmail.com", number:"56", date: "2017-03-01"};
        }
        _onPressButton = () => {
            // Call ValidationComponent validate method
            this.validate({
              name: {minlength:3, maxlength:7, required: true},
              email: {email: true,minlength:3,  required: true},
              number: {numbers: true,minlength:10, required: true},
              date: {date: 'YYYY-MM-DD', required: true},
              
            });
            
                    // var randomNumber= Math.floor(Math.random() * 10);
                    // this.setState({ numberHolder: randomNumber })
            
                  
          }
        //   generateRandomNumber = () => {
        //     var randomNumber = Math.floor(Math.random() * 10);
        //     this.setState({ numberHolder: randomNumber })
           
        //   }
    
    
    render() {
        return (
        
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}>
                            
                        </Text>     
                    </View>
                </View>
                
                
                
                 
                 <View>
                     <TouchableOpacity  onPress={() => navigate("aboutUs")}>
                        
                
                        
                          
                          </TouchableOpacity>             
                </View>
                <Text style={styles.abcd}>
                    hello
                </Text>
                <View >
          <TextInput style={styles.ex} ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <TextInput style={styles.ex} ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <TextInput style={styles.ex} ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} />
          <TextInput style={styles.ex} ref="date" onChangeText={(date) => this.setState({date})} value={this.state.date} />

          {/* <TouchableHighlight onPress={this._onPressButton}>
            <Text style={styles.ex} >Submit</Text>
          </TouchableHighlight> */}

          <Text >
            {this.getErrorMessages()}
          </Text>
        </View>


          
                {/* <View style={{marginTop:20}}>
                <Text style={styles.abctext}>
                {this.state.numberHolder}
                </Text>
                </View> */}
                <View style={styles.buttonstyle}>
                <Button   onPress={this._onPressButton}  title="Enter" color='black' > </Button>
                </View>      

  </View>
                
                
            
                                
                
                
            

        )
    }
}


const styles = StyleSheet.create({
    abcd: {
     fontSize:30,
     color:"red",  
    },
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    img:{
        height:180,
        width:"100%",
        marginBottom: 2.5,
    
            },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        // backgroundColor:"#FFF",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        flex: 1,
        color: 'black',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: 'black'
    },
    
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: 'black'
    },
    ex:{
        borderColor:'black',
        marginBottom:10,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'lightblue',

    },
    abctext:{
        color:"red",
        alignItems:"center",
        textAlign:"center",
        marginLeft:150,
        marginRight:150,
        marginTop:0,
        marginBottom:50,
        fontSize:30,
        borderWidth:2,
        borderStyle:'dashed',
        backgroundColor:"lightblue",
    },
    buttonstyle:{ 
        marginLeft:130,
        marginRight:130,},
    
   
})

//export default aboutUs
