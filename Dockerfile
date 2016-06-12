# Copyright (c) 2012-2016 Codenvy, S.A.
# All rights reserved. This program and the accompanying materials
# are made available under the terms of the Eclipse Public License v1.0
# which accompanies this distribution, and is available at
# http://www.eclipse.org/legal/epl-v10.html
# Contributors:
# Codenvy, S.A. - initial API and implementation

FROM codenvy/debian_jre
ENV NODE_VERSION=4.3.1 \
    NODE_PATH=/usr/local/lib/node_modules
    
RUN sudo apt-get update && \
    sudo apt-get -y install build-essential libssl-dev libkrb5-dev gcc make ruby-full rubygems && \
    sudo gem install sass compass && \
    sudo apt-get clean && \
    sudo apt-get -y autoremove && \
    sudo apt-get -y clean && \
    sudo rm -rf /var/lib/apt/lists/* && \
	curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh && \
	. ~/.nvm/nvm.sh && \
	nvm install 4.3.1 && \
	node --version && \
	echo 'source ~/.nvm/nvm.sh; nvm use 4.3.1 &>/dev/null ' >> ~/.bashrc 



EXPOSE 3000 5000 8080 9000

RUN sudo git clone https://github.com/McCallTech/vendingMachineKata.git /vendingMachineKata
WORKDIR /vendingMachineKata

CMD tail -f /dev/null
