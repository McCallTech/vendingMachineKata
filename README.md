[![Build Status](https://travis-ci.org/McCallTech/vendingMachineKata.svg?branch=master)](https://travis-ci.org/McCallTech/vendingMachineKata) 
[![Gh-Pages](https://img.shields.io/badge/gh--pages-Deployment%20courtesy%20of%20Travis--CI-green.svg)](http://mccalltech.github.io/vendingMachineKata/)
[![Kanban Board](https://img.shields.io/badge/huboard-ScrumBan-blue.svg)](https://huboard.com/McCallTech/vendingMachineKata/#/)
#Kata:
Culmination of a couple of Kata exercises. 
#### Dev Option 1: [Vending Machine Kata](https://github.com/guyroyse/vending-machine-kata#vending-machine-kata)

#### DevOps Option 1:[Configuration Management](https://docs.google.com/document/d/1aXIFgDu9mDzCHpbjv4ybWAxWLcOneNqtih3WOrhRvIg/edit?usp=sharing)

- [x] a: Install/configure the CM tool of your choice.
- [ ] b: Automate the provisioning of a 3-tier web application stack (data layer, application layer, presentation
layer). An example stack might be, but is in no way limited to, redis/passenger/nginx. 
- [ ] c: Automate the deployment of a simple &#39;ping&#39; page that establishes that each of the 3 layers in the stack
are available.

- [ ] d: Provide us with access to your RCS and identify a few issues that represent the next configurations to
be managed in your environment; don&#39;t be surprised if someone proposes a change that addresses
one of the issues...  Your project should be complete as delivered, but every project has a &#39;next step&#39;
and we&#39;d like to know what you think your next steps are.

#### DevOps Option 2: [Continuous Integration/Deployment](https://docs.google.com/document/d/1aXIFgDu9mDzCHpbjv4ybWAxWLcOneNqtih3WOrhRvIg/edit?usp=sharing)

- [ ] a: Build a simple application with reasonable unit and/or integration tests; there really aren&#39;t any
constraints here, but it should do something that we can see the results of.

- [ ] b: Configure a Continuous Integration solution to monitor a Version Control System and execute the unit
and/or integration tests when new commits are made.

- [ ] c: Provide us with access to your RCS and identify a few issues that represent the next features to be
delivered in your application; don&#39;t be surprised if someone commits a change that addresses one of
the issues...  Your project should be complete as delivered, but every project has a &#39;next step&#39; and
we&#39;d like to know what you think your next steps are.

- [ ] d: Configure a Continuous Deployment solution to automatically deploy the application when CI is
successful and notify the Software Engineer when CI fails.

#Solution:
### Linode Ubuntu 14.04
#### Specs:  
- linode 1024 or lindoe 4096   
#### CM
- linodes stack scripts are run when server is (re)built
```
#!/bin/bash 
apt-get update && \
apt-get install make curl -y && \
cd ~ && \
curl -o- https://raw.githubusercontent.com/McCallTech/vendingMachineKata/master/Makefile > ~/Makefile && make init

```
- Makefile
  - make init && make start_kataDocker
    - Spins up eclipse che and pulls joshmccall221/vendingMachineDocker to server on port 80
    - Eclipse Che : ${linode.ip}:8080
    - vendingMachineKata :  ${linode.ip}
```
init:
	- curl -o- https://raw.githubusercontent.com/McCallTech/vendingMachineKata/master/salt >> salt && bash salt 
	- git clone https://github.com/joshmccall221/dotfiles.git  ~/dotfiles && cd ~/dotfiles &&  make eclipse_che && make start_kataDocker 

```
- Salt
  - 
  ```
#Add key   
wget -O - https://repo.saltstack.com/apt/ubuntu/14.04/amd64/latest/SALTSTACK-GPG-KEY.pub | sudo apt-key add -
echo 'deb http://repo.saltstack.com/apt/ubuntu/14.04/amd64/latest trusty main ' >> /etc/apt/sources.list.d/salt.list
#Install salt
sudo apt-get update -y
sudo apt-get install salt-minion -y
#use salt to bootstrap system
salt-call --local pkg.install git make vim tmux ack-grep 

#Use salt formula to install docker
mkdir /srv/salt
cd /srv/salt/
git clone https://github.com/saltstack-formulas/docker-formula.git
cp -R ./docker-formula/docker/ .
salt-call --local state.sls docker
  ```
  


#### Sources, reading list and credits: 
##### CM: 
[Linode peformance with low tier memory](https://www.centos.org/docs/5/html/5.2/Deployment_Guide/s2-swap-creating-file.html)

##### Deployment: 
[Docker Blue/Green](https://botleg.com/stories/blue-green-deployment-with-docker/)

##### Container:
[Docker hub deployment: github, travis, dockerhub (blue/green with depcon)](http://depcon.containx.io/docs/travis)

[Docker formulas with Salt](https://github.com/saltstack-formulas/docker-formula#docker-containers)

[Docker Cheat Sheet](https://github.com/wsargent/docker-cheat-sheet)

[Docker exec] (https://docs.docker.com/engine/reference/commandline/exec/)
##### GitHub:
[Awesome Sheilds](http://shields.io/)
