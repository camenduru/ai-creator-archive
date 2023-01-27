## What is the AI Creator Archive 

An AI Creator Archive is a collection or repository of information about the individuals and teams who create and develop artificial intelligence models. 
The archive can include information such as the creators' research interests, and notable contributions to the field of AI.
It also include information about the AI models they have developed. 
The purpose of an AI Creator Archive is to provide transparency and recognition for the creators of AI models. 
It is also useful for people who are interested in learning about the history and development of AI and the people behind it.

## Contributing to the AI Creator Archive
Just open an issue with your username, model name, model version, model direct link or Google Drive link, 4 images with PNG info, and if you want, an info.txt

## Image Formats
Images should not contain any nudity. Remember how GitHub deleted the web UI without warning.

## Automation Design

All files and the Colab notebook will be created with the server, the Colab will be published on this link: https://github.com/camenduru/stable-diffusion-webui-colab

### Folder Structure

```
.
├── ...
├── creator_username                                                    # username format if UseR_Nam3 should be user_nam3
│   ├── model_name                                                      # model name format if OrangeCocoaMix should be orange_cocoa_mix
│       ├── model_version                                               # model version format if v0.1.0 should be 010
│           └── creator_username-model_name-model_version-image_1.png   # 4 images should be generated for each version
│           └── creator_username-model_name-model_version-image_2.png   # using the corresponding model version
│           └── creator_username-model_name-model_version-image_3.png   # the PNG info should be included within the images
│           └── creator_username-model_name-model_version-image_4.png   # all images will auto regenerated with the PNG info and overwrite these four images
│           └── creator_username-model_name-model_version-links.txt     # check links.txt format
│           └── creator_username-model_name-model_version-info.txt      # check info.txt format
│           └── creator_username-model_name-model_version-online.txt    # check online.txt format
└── ...
```

#### links.txt format

```
Models should be PyTorch safetensors format if not please convert with this https://github.com/camenduru/converter-colab
Each line must contain one direct link to the model, not the model page. The magnet should contain only the model.

├── https://huggingface.co/ckpt/stable-diffusion-2/resolve/main/768-v-ema.ckpt
└── https://civitai.com/api/download/models/0000?type=Pruned%20Model&format=SafeTensor
└── magnet:?xt=urn:btih:000000&dn=model&tr=udp://tracker.com&tr=udp://tracker.org/announce
```

#### info.txt format

```
With a file size of 10KB, do whatever you want.
```

#### online.txt format

```
Online service links, such as Google Colab
Each line must contain one link.

├── https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_webui_colab.ipynb
```

## Archive PyTorch Backup

All PyTorch safetensors and ckpt models in this archive will be stored at this link: https://huggingface.co/ckpt and the link will be written in the 'models links.txt' file.
If we can find more cloud storage sponsors, we will create multiple backups, including backups of backups and backups of backups of backups of backups of ... <br />
We will also publish reports on the relationships between each model and its parent models, as well as the mixture percentages.

## Archive Flax Diffusers Lib Backup
All Flax Diffusers Lib safetensors and msgpack weights in this archive will be stored at this link: https://huggingface.co/flax and the link will be written in the 'models flax-links.txt' file.

## Archive PyTorch Diffusers Lib Backup
All PyTorch Diffusers Lib safetensors and bin weights in this archive will be stored at this link: https://huggingface.co/flax `pytorch` branch and the link will be written in the 'models pt-links.txt' file.

## Archive Embed Backup
Textual Inversion, LoRA models will be stored at this link: https://huggingface.co/embed (Another archival project will be announced soon)
