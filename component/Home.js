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

import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Button,Image,label,Alert,TextHolder,numberHolder,form,input} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
//import Dialog, {  DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';


 class Home extends Component {
    constructor(props){
    
        super(props);
        
        
        this.state = {
            // This is a default value...
            numberHolder: null,
            disabled:true
      
          }
         
        
          
        }
        handleChange = (e ) =>{
            if(e.length>1){
                this.setState({
                    disabled:false
                })
            }
            
            //  else if(f.length>1){
            //     this.setState({
            //         disabled:false
            //     }) 
            // }
            // else if(g.length>1){
            //     this.setState({
            //         disabled:false
            //     }) 
            // }
            // else if(h.length>1){
            //     this.setState({
            //         disabled:false
            //     }) 
            // }
        }
        
        generateRandomNumber = () => {
            var randomNumber = Math.floor(Math.random() * 10);
            this.setState({ numberHolder: randomNumber })
           
          }

        
          
          
        
        
        
        
    
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
                     <TouchableOpacity  onPress={() => navigate("Home")}>
                        
                
                        
                          
                          </TouchableOpacity>      
      
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'red'}}>
                        Enter Details to find out your Luck Number...
                    </Text>
                </View>

             {/* onChange={this.handleChange} */}

<View style={{borderStyle:'dotted',borderWidth:3,width:370,height:400,marginLeft:10}}>
     <View style={styles.columnflex}>  
         <View>       
            <View style={styles.adjust}>
            <Text style={styles.edittext}>Enter your name</Text>
            <TextInput placeholder="" onChangeText={(e) => this.handleChange(e)} style={styles.inputstyling}></TextInput>
            </View>
        </View>

        <View style={styles.columngrow}>
            <View style={styles.adjust}>
            <Text style={styles.edittext}>Enter  your birth year</Text>
            <TextInput placeholder="ggg" onChangeText={(f) => this.handleChange(f)} style={styles.inputstyling}> </TextInput>
            </View>
        </View>

        <View style={styles.columngrow}>
            <View style={styles.adjust}>
            <Text style={styles.edittext}>Enter  your birth month</Text>
            <TextInput placeholder="ggg" onChangeText={(g) => this.handleChange(g)} style={styles.inputstyling}> </TextInput>
            </View>
        </View>
        <View style={styles.columngrow}>
            <View style={styles.adjust}>
            <Text style={styles.edittext}>Enter  your birth date</Text>
            <TextInput placeholder="ggg" onChangeText={(h) => this.handleChange(h)} style={styles.inputstyling}> </TextInput>
            </View>
        </View>
    </View>
 </View>
                   

                
             
            <View style={{marginTop:30,alignItems:'center'}} >
                <Text style={{fontSize:20,color:'blue'}}>
                    Your today's lucky number is
                </Text>
            </View>
                <View style={{marginTop:20}}>
                <Text style={styles.abctext}>
                {this.state.numberHolder}
                </Text>
                </View>
                <View style={styles.buttonstyle}>
                <Button  disabled={this.state.disabled} onPress={this.generateRandomNumber}  title="Enter" color='black' > </Button>
                </View>
 
                
                
                
                
        
        
 
     </View>
     
                
                
            
                                
                
                
            

        )
    }
}


const styles = StyleSheet.create({
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
        marginRight:130,
        
    },
    edittext:{
        fontSize:20,
        marginTop:5,
    },
    inputstyling:{
        
        backgroundColor:"white",
        borderWidth:2,
        borderColor:'red',
        flexGrow:1,
        marginLeft:20,
        marginRight:10,


    },
    columnflex:{
        flex:1,
        flexDirection:'column',
    },
    columngrow:{
        flexGrow:1,
        marginTop:80,
    },
    adjust:{
        flex:1,
        flexDirection:'row',
        
        flexWrap:'wrap',
    },
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
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
    
    
    
   
})

export default Home
