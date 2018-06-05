import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import {
  Input,
  Button,
  Checkbox,
  Select,
  DatePicker,
  Switch,
  Radio,
  Grid,
  Feedback
} from '@icedesign/base';
import {Base64} from 'js-base64';
import NebUtils from '../../../../util/NebUtils.js'

const { Row, Col } = Grid;
const Toast = Feedback.toast;

export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        type: 'WebSite',
        result: 'Phishing Site',
        mainBody: '',
        content: '',
      },
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  submit = () => {
    this.formRef.validateAll((errors, values) => {
      console.log('error', errors, 'value', values);
      if (errors) {
        return;
      }

      Toast.success("Please confirm that you have installed the Chrome extension or the mobile-side Nebula wallet");
      const contract = {
        function: 'AddSafeInfoRecord',
        args: `["${values.type}", "${values.result}", "${values.mainBody}", "${Base64.encode(values.content)}"]`,
      };
      NebUtils.nebPayCall(contract.function, contract.args, true, (txHash) => {
        if (txHash) {
          Toast.success("Transaction submitted. The success of the transaction is to submit information, thank you!")
        }
      });
    });
  };

  render() {
    return (
      <div className="create-activity-form" style={{padding: '30px 10%'}}>
        <IceContainer title="Nebulas Safety 365: Provide / Report" style={styles.container}>
          <IceFormBinderWrapper
            ref={(formRef) => {
              this.formRef = formRef;
            }}
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <div>
              <Row style={styles.formItem}>
                <Col xxs="8" s="6" l="6" style={styles.formLabel}>
                  Report Main Body：
                </Col>

                <Col s="16" l="18">
                  <IceFormBinder
                    name="mainBody"
                    required
                    message="required"
                  >
                    <Input style={{ width: '100%' }} placeholder="Please enter the website address, Twitter address, phone number, etc. that you want to report"/>
                  </IceFormBinder>
                  <IceFormError name="mainBody" />
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col xxs="8" s="6" l="6" style={styles.formLabel}>
                  Type：
                </Col>
                <Col s="16" l="18">
                  <IceFormBinder name="type">
                    <Select
                      className="next-form-text-align"
                      dataSource={[
                        { label: 'WebSite', value: 'WebSite' },
                        { label: 'Phone', value: 'Phone' },
                        { label: 'Email', value: 'Email' },
                        { label: 'Twitter', value: 'Twitter' },
                        { label: 'Facebook', value: 'Facebook' },
                        { label: 'WeChat', value: 'WeChat' },
                        { label: 'QQ', value: 'QQ' },
                      ]}
                    />
                  </IceFormBinder>
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col xxs="8" s="6" l="6" style={styles.formLabel}>
                  Attitude：
                </Col>
                <Col s="16" l="18">
                  <IceFormBinder name="result">
                    <Select
                      className="next-form-text-align"
                      dataSource={[
                        { label: 'Safe', value: 'Safe' },
                        { label: 'Viral', value: 'Viral' },
                        { label: 'Fraudulent', value: 'Fraudulent' },
                        { label: 'Phishing Site', value: 'Phishing Site' },
                        { label: 'Other', value: 'Other' },
                      ]}
                    />
                  </IceFormBinder>
                </Col>
              </Row>

              <Row>
                <Col xxs="8" s="6" l="6" style={styles.formLabel}>
                  Content：
                </Col>
                <Col s="16" l="18">
                  <IceFormBinder name="content">
                    <Input
                      multiple
                      style={{ width: '100%' }}
                      rows={10}
                      placeholder="Please enter the corresponding content you want to report"
                    />
                  </IceFormBinder>
                </Col>
              </Row>

              <Row style={styles.btns}>
                <Col xxs="8" s="6" l="6" style={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="16" l="18">
                  <Button type="primary" onClick={this.submit}>
                    Submit! (Supports both mobile wallet and browser wallet)
                  </Button>
                </Col>
              </Row>

              <Row style={styles.btns}>
                <Col xxs="8" s="6" l="6" style={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="16" l="18">
                  <Button
                    type="primary"
                    component="a"
                    href="#/"
                  >
                    Return to home page
                  </Button>
                </Col>
              </Row>

            </div>
          </IceFormBinderWrapper>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};
