all:: franc zxcvbn-pv
		@echo "Done."

franc:
		@echo "Downloading franc-min.js"
		@rm -fr src/franc
		@mkdir src/franc
		@curl -sL https://github.com/wooorm/franc/releases/download/franc%404.0.0/franc-min.js --output src/franc/franc.js

zxcvbn-pv:
		@echo "Cloning zxcvbn-pv"
		@rm -fr src/zxcvbn-pv
		@git clone --quiet https://github.com/therealglazou/zxcvbn-pv src/zxcvbn-pv

