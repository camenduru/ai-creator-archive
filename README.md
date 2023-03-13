🐣 Please follow me for new updates https://twitter.com/camenduru <br />
🔥 Please join our discord server https://discord.gg/k5BwmmvJJU

## 🚦WIP🚦

## JSON & Preview

JSON: https://aica.pages.dev/all.json <br />
Preview: https://aica.pages.dev

## Motivation and Action

Maybe someday, your favorite AI company will force you to make your stable diffusion models private. It's time to copy and paste them to other cloud providers to ensure they can't be taken down. This repo will begin with 105 models from the [stable-diffusion-webui-colab](https://github.com/camenduru/stable-diffusion-webui-colab) project and will provide a simple JSON file for the data inside. It will continue to grow.

## What is the AI Creator Archive 

An AI Creator Archive is a repository of information about the individuals and teams who create and develop artificial intelligence models. 
The archive can include information such as the creators' notable contributions to the field of AI.
It also include information about the AI models they have developed. 
The purpose of an AI Creator Archive is to provide transparency and recognition for the creators of AI models. 
It is also useful for people who are interested in learning about the history and development of AI and the people behind it.

## Contributing to the AI Creator Archive
Just open an issue with your `username`, `model name`, `model version`, `model token(s)`, `model direct link` or `Google Drive link`, `4 images with PNG info`, and if you want, an `info.txt`

## Image Formats
Images should not contain any nudity. Remember how GitHub deleted the web UI without warning.

## Automation Design

All files and the Colab notebook will be created with the server, the Colab will be published on this link: https://github.com/camenduru/stable-diffusion-webui-colab

### Folder Structure

```
.
├── ...
├── creator_username          # username format if UseR_Nam3 should be user_nam3
│   └── model_name            # model name format if OrangeCocoaMix should be orange_cocoa_mix
│       └── model_version     # model version format if v0.1.0 should be 0_1_0
│           ├── 1.png         # 4 images should be generated for each version
│           ├── 2.png         # using the corresponding model version
│           ├── 3.png         # the PNG info should be included within the images
│           ├── 4.png         # all images will auto regenerated with the PNG info and overwrite these four images
│           ├── links.txt     # check links.txt format
│           ├── tokens.txt    # check tokens.txt format
│           ├── online.txt    # check online.txt format
│           ├── images.txt    # check images.txt format
│           ├── type.txt      # check type.txt format
│           ├── vae.txt       # check vae.txt format
│           └── info.txt      # check info.txt format
├── all.json
└── ...
```

#### links.txt format

```
Models should be PyTorch safetensors format if not please convert with this https://github.com/camenduru/converter-colab
Each line must contain one direct link to the model, not the model page. The magnet should contain only the model.

├── https://huggingface.co/ckpt/stable-diffusion-2/resolve/main/768-v-ema.ckpt
├── https://civitai.com/api/download/models/0000?type=Pruned%20Model&format=SafeTensor
└── magnet:?xt=urn:btih:000000&dn=model&tr=udp://tracker.com&tr=udp://tracker.org/announce
```

#### tokens.txt format

```
Each line must contain one token.

├── analog style
└── dreamlikeart style
```

#### online.txt format

```
Online service links, such as Google Colab
Each line must contain one link.

├── https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable/stable_diffusion_webui_colab.ipynb
```

#### images.txt format

```
4 images should be generated for each version using the corresponding model version
The PNG info should be included within the images
All images will auto regenerated with the PNG info and overwrite these four images
Each line must contain one image url.

├── https://aica.pages.dev/creators/basunat/cinematic_diffusion/1_0_0/1.png
├── https://aica.pages.dev/creators/basunat/cinematic_diffusion/1_0_0/2.png
├── https://aica.pages.dev/creators/basunat/cinematic_diffusion/1_0_0/3.png
└── https://aica.pages.dev/creators/basunat/cinematic_diffusion/1_0_0/4.png
```

#### type.txt format

```
fine_tune, dreambooth, textual_inversion, hypernetwork, aesthetic_gradient, lora, blend
```

#### vae.txt format

```
VAE link for the model, name should be same_name_with_model.vae.pt
Each line must contain one link.

├── https://huggingface.co/ckpt/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt
```

#### info.txt format

```
info.txt file will follow the markdown guide, with a file size of 10KB, do whatever you want. maybe example prompts.
```

#### all.json
```
all.json contains all of the data inside the files links.txt, tokens.txt, online.txt, info.txt, and image links.

[
    {
        "creator_username": "22h",
        "images": [
            "https://aica.pages.dev/creators/22h/vintedois_diffusion/0_1_0/1.png",
            "https://aica.pages.dev/creators/22h/vintedois_diffusion/0_1_0/2.png",
            "https://aica.pages.dev/creators/22h/vintedois_diffusion/0_1_0/3.png",
            "https://aica.pages.dev/creators/22h/vintedois_diffusion/0_1_0/4.png"
        ],
        "info": "https://aica.pages.dev/creators/22h/vintedois_diffusion/0_1_0/info.txt",
        "links": [
            "https://huggingface.co/ckpt/vintedois-diffusion-v0-1/resolve/main/vintedois_0_1.ckpt"
        ],
        "model_name": "vintedois_diffusion",
        "model_version": "0_1_0",
        "online": [
            "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable/vintedois_diffusion_0_1_webui_colab.ipynb"
        ],
        "tokens": [
            "estilovintedois"
        ],
        "type": [
            "dreambooth"
        ],
        "vae": []
    },
    {
        "creator_username": "852wa",
        "images": [
            "https://aica.pages.dev/creators/852wa/8528_diffusion/1_0_0/1.png",
            "https://aica.pages.dev/creators/852wa/8528_diffusion/1_0_0/2.png",
            "https://aica.pages.dev/creators/852wa/8528_diffusion/1_0_0/3.png",
            "https://aica.pages.dev/creators/852wa/8528_diffusion/1_0_0/4.png"
        ],
        "info": "https://aica.pages.dev/creators/852wa/8528_diffusion/1_0_0/info.txt",
        "links": [
            "https://huggingface.co/ckpt/8528-diffusion/resolve/main/8528d-final.ckpt"
        ],
        "model_name": "8528_diffusion",
        "model_version": "1_0_0",
        "online": [
            "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable/8528_diffusion_webui_colab.ipynb"
        ],
        "tokens": [],
        "type": [
            "fine_tune"
        ],
        "vae": []
    }
]
```

## Archive PyTorch Backup

All PyTorch safetensors and ckpt models in this archive will be stored at this link: https://huggingface.co/ckpt and the link will be written in the 'models links.txt' file.
If we can find more cloud storage sponsors, we will create multiple backups, including backups of backups and backups of backups of backups of backups of ... <br />
We will also publish reports on the relationships between each model and its parent models, as well as the mixture percentages.

## Archive Flax Diffusers Lib Backup
All Flax Diffusers Lib safetensors and msgpack weights in this archive will be stored at this link: https://huggingface.co/flax and the link will be written in the 'models flax-links.txt' file.

## Archive PyTorch Diffusers Lib Backup
All PyTorch Diffusers Lib safetensors and bin weights in this archive will be stored at this link: https://huggingface.co/flax `pytorch` branch and the link will be written in the 'models pt-links.txt' file.

## Archive Core ML Backup
All Core ML Models in this archive will be stored at this link: https://huggingface.co/core-ml and the link will be written in the 'models coreml-links.txt' file.

## Archive Embed Backup
Textual Inversion, LoRA models will be stored at this link: https://huggingface.co/embed (Another archival project will be announced soon)

## Archive TensorRT Backup
TensorRT models will be stored at this link: https://huggingface.co/trrt (Another archival project will be announced soon)
