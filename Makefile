all: init test docs package
init:
    # - Install your dependencies via gem, maven, etc.
    # - Download sql dumps or copy configuration templates
    #   that a dev needs to get up and running.
    # - Install git hooks (more below)
    # apt-get update && apt-get install make curl -y && curl -o- https://raw.githubusercontent.com/McCallTech/vendingMachineKata/master/Makefile >> Makefile && make init
	- curl -o- https://raw.githubusercontent.com/McCallTech/vendingMachineKata/master/salt >> salt && bash salt 
	- git clone https://github.com/joshmccall221/dotfiles.git  ~/dotfiles && cd ~/dotfiles &&  make eclipse_che && make start_kataDocker

test:
    # Run unit tests, code coverage, and linters
docs:
    # Generate your API documentation (you do have some, don't you?)
package:
    # Build a release tarball or jar or executable
dev:
	- bash ~/dotfiles/symlink.sh && sudo rm -rf /projects/* && ln -s /vendingMachineKata /projects/vendingMachineKata
install:
    # If your project builds an executable, place it in the `$PATH`.
    # E.g. copy or symlink it into `/usr/local/bin`
deploy:
    # If you have a simple deployment mechanism, like `rsync` or `s3cmd`, let
    # the Makefile take care of it.
.PHONY: test docs
#https://cbednarski.com/articles/makefiles-for-everyone/
