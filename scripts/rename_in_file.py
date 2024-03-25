import re
import sys
import pathlib

_underscore_pattern = re.compile(r"\w+_UNDERSCORE_\w+")


def rename_underscore(text: str) -> str:
    def remove_underscore(match: re.Match):
        return match.group(0).replace("UNDERSCORE_", "")

    return _underscore_pattern.sub(remove_underscore, text)


def perform_renaming(path_str: str):
    path = pathlib.Path(path_str)
    assert path.exists(), f"no path @ {path}"
    assert path.name == "index.ts"
    print(f"renaming: {path_str}")
    old_text = path.read_text()
    new_text = rename_underscore(old_text)
    if old_text != new_text:
        path.write_text(new_text)
    else:
        print(f"renamed content in {path}")


if __name__ == "__main__":
    *_, index_ts = sys.argv
    perform_renaming(index_ts)
