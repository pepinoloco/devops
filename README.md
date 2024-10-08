# DevOps Labs
## Docker
```bash
sudo apt install docker.io
```
```bash
sudo usermod -aG docker $USER
```

## Nodejs
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```
```bash
sudo apt-get install -y nodejs
```

## GitHub CLI
```bash
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
	&& sudo mkdir -p -m 755 /etc/apt/keyrings \
	&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
	&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
	&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
	&& sudo apt update \
	&& sudo apt install gh -y
```
```bash
gh extension install github/gh-copilot
```

## Mocha (Nodejs Testing Framework)
```bash
npm install --save-dev mocha
```

## Express (Nodejs Web Framework)
```bash
npm install --save express
```

## Request (Nodejs HTTP client lib)
```bash
npm install --save-dev request
```
