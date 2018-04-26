import React, { Component } from 'react';
import './home.less';

class Base extends Component {
  render() {
    return (
      <div className="page_bg">
        <section>
          <h6>关于我们</h6>
          <article>
            小马众包是人工智能数据处理、发布、分享和交换平台，拥有专业强大的图形图像、视频跟踪、雷达点云等数据处理工具和协同工作平台，以DaaS模式为人工智能企业提供高质量、低成本的训练数据
          </article>
        </section>

        <section>
          <h6>隐私声明</h6>
          <article>
            码图尊重并保护您通过我们的平台服务（包括平台、产品服务、解决方案、数据合作等）向我们提供的所有隐私。本隐私政策（“隐私政策”）适用于通过本平台服务收集的所有个人信息，描述了我们收集、使用、披露、保护信息的方式，并为您提供访问我们所维护的关于您的个人信息的渠道。本隐私政策并不适用于您通过其他方式向我们提供的或者我们通过其他公共来源所收集的属于公开信息的个人信息。
          </article>
        </section>

        <section>
        <h6>常见问题</h6>
          <h6>申请提现后，多久能到账？</h6>
          <article>
            一般来说，申请提现后1小时内即可到账，如果遇到第三方支付结算延期的情况，也会在1个工作日内提现到账。
          </article>
          <h6>如何邀请好友加入？</h6>
          <article>
            将自己的要求海报发送至朋友圈，或直接通过微信发送给好友，好友注册后，您可得到相应奖励。
          </article>
        </section>
      </div>
    );
  }
}

export default Base;
