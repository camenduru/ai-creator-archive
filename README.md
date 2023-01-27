## What is the AI Creator Archive 

An AI Creator Archive is a collection or repository of information about the individuals and teams who create and develop artificial intelligence models. 
The archive can include information such as the creators' research interests, and notable contributions to the field of AI.
It also include information about the AI models they have developed. 
The purpose of an AI Creator Archive is to provide transparency and recognition for the creators of AI models. 
It is also useful for people who are interested in learning about the history and development of AI and the people behind it.

## Contributing to the AI Creator Archive

### Folder Structure

```
.
├── ...
├── creator_username                                                    # username
│   ├── model_name                                                      # OrangeCocoaMix should be orange_cocoa_mix
│       ├── model_version                                               # model version format 1_0_0
│           └── creator_username-model_name-model_version-image_1.png   # 4 images for each version
│           └── creator_username-model_name-model_version-image_2.png
│           └── creator_username-model_name-model_version-image_3.png
│           └── creator_username-model_name-model_version-image_4.png
│           └── creator_username-model_name-model_version-links.txt     # check links.txt format
│           └── creator_username-model_name-model_version-info.txt      # check info.txt format
└── ...
```

#### links.txt format

each line has to containe one link or magnet

├── https://huggingface.co/camenduru/plushies
└── https://civitai.com/models/0000
└── https://civitai.com/models/0000
└── magnet:?xt=urn:btih:000000&dn=model&tr=udp://tracker.com&tr=udp://tracker.org/announce

#### info.txt format

10kb file size do what you want
