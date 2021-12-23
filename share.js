'use strict';

(function(exports){

    const Message = Object.freeze({
        ReqMachinesData:  'ReqMachinesData',
        ReplyMachinesData:'ReplyMachinesData',
        PushMachinesData: 'UpdateMachinesData',
        ReqProductsData:  'ReqProductsData',
        ReplyProductsData:'ReplyProductsData',
        PushProductsData: 'PushProductsData'
    });
    
    exports.MessageTypes = Message;

    exports.ReqMachinesData = () => {
        return JSON.stringify({
            type: Message.ReqMachinesData
        });
    };

    exports.ReplyMachinesData = (machinesData) => {
        return JSON.stringify({
            type: Message.ReplyMachinesData,
            MachineData: machinesData
        });
    };

    exports.PushMachinesData = (machinesData) => {
        return JSON.stringify({
            type: Message.PushMachinesData,
            MachineData: machinesData
        });
    };

    exports.ReqProductsData = (machineId) => {
        return JSON.stringify({
            type: Message.ReqProductsData,
            machineId: machineId
        });
    };

    exports.ReplyProductsData = (machineId, productData) => {
        return JSON.stringify({
            type: Message.ReplyProductsData,
            machineId: machineId,
            productData: productData
        });
    };

    exports.PushProductsData = (machineId, productData) => {
        return JSON.stringify({
            type: Message.PushProductsData,
            machineId: machineId,
            productData: productData
        });
    };

    exports.test = function(msg){
        console.log('This is a function from shared module' + msg);
    };
  
  }(typeof exports === 'undefined' ? 
           this['shareModule']= {} : exports));