import React from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from "@twilio/flex-ui";
import { CustomTaskListComponentStyles } from './CustomTaskList.Styles';
import { withTaskContext } from '@twilio/flex-ui';


// It is recommended to keep components stateless and use redux for managing states
const CustomTaskList = (props) => {

  const {task} = props; //{object destructuring} seleciona somente a task do objeto props
  if (task.attributes.channelType == "whatsapp"){

  return (
    <h1>
        <CustomTaskListComponentStyles>
        Name: {task.attributes.customers.customer_attribute_2}<br/>
        E-mail: {task.attributes.customers.customer_attribute_3}<br/>
        </CustomTaskListComponentStyles>
    </h1>
  );}



  if (task.attributes.direction == "outbound"){

    return (
      <h1>
          <CustomTaskListComponentStyles> 
          Direction:{task.attributes.direction}<br/>
          </CustomTaskListComponentStyles>
      </h1>
    );}
    
  if (task.attributes.direction == "inbound"){

      return (
        <h1>
            <CustomTaskListComponentStyles> 
            Protocol:{task.attributes.auditoria}<br/>
            </CustomTaskListComponentStyles>
        </h1>
      );}  

  if (task.attributes.channelType == "web"){

        return (
          <h1>
              <CustomTaskListComponentStyles>
              Name: {task.attributes.customers.customer_attribute_2}<br/>
              E-mail: {task.attributes.customers.customer_attribute_3}<br/>
              </CustomTaskListComponentStyles>
          </h1>
        );}
};



CustomTaskList.displayName = 'CustomTaskList';

CustomTaskList.propTypes = {
  task:Object
};

export default withTaskContext(CustomTaskList);