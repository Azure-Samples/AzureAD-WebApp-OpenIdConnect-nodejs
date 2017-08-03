---
services: active-directory
platforms: nodejs
author: xerners
---

# Integrating Azure AD into a NodeJS web application

This Node.js app will give you with a quick and easy way to set up a Web application in node.js with Express using OpenID Connect. The sample server included in the download is designed to run on any platform.

We've released all of the source code for this example in GitHub under an MIT license, so feel free to clone (or even better, fork!) and provide feedback on the forums.


## Quick Start

Getting started with the sample is easy. It is configured to run out of the box with minimal setup.

### Step 1: Register an Azure AD Tenant

To use this sample you will need a Azure Active Directory Tenant. If you're not sure what a tenant is or how you would get one, read [What is an Azure AD tenant](http://technet.microsoft.com/library/jj573650.aspx)? or [Sign up for Azure as an organization](http://azure.microsoft.com/documentation/articles/sign-up-organization/). These docs should get you started on your way to using Azure AD.

### Step 2: Download node.js for your platform

To successfully use this sample, you need a working installation of [Node.js](https://nodejs.org/).

### Step 3: Download the Sample application and modules

Next, clone the sample repo and install the project's NPM dependencies.

From your shell or command line:

* `$ git clone https://github.com/Azure-Samples/active-directory-node-webapp-openidconnect.git`
* `$ cd active-directory-node-webapp-openidconnect`
* `$ npm install`

### Step 5: Configure your server using config.js

Provided for simplicity, `config.js` contains some simple variables. In a 
real application, it would be best to use environment variables, a Node.js 
configuration system, or [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) 
to store credentials securely, outside of your source control system.

In `config.js`, your tenant ID should go in the `realm` configuration field.

**NOTE:** You may also pass the `issuer:` value if you wish to validate that as well.

### Step 6: Run the application

```bash
$ npm start
```

### You're done!

You will have a server successfully running on `http://localhost:3000`.

### Acknowledgements

We would like to acknowledge the folks who own/contribute to the following projects for their support of Azure Active Directory and their libraries that were used to build this sample. In places where we forked these libraries to add additional functionality, we ensured that the chain of forking remains intact so you can navigate back to the original package. Working with such great partners in the open source community clearly illustrates what open collaboration can accomplish. Thank you!

## About The Code

Coming soon...
