import pytest
import rename_in_file

examples = {
    "remove_underscore": (
        """\
export enum DbRoleToExecuteType {
  /** BUILT_IN */
  BUILT_UNDERSCORE_IN = "BUILT_IN",
  /** CUSTOM */
  CUSTOM = "CUSTOM",
}""",
        """\
export enum DbRoleToExecuteType {
  /** BUILT_IN */
  BUILT_IN = "BUILT_IN",
  /** CUSTOM */
  CUSTOM = "CUSTOM",
}""",
    ),
    "unchanged_not_found": (
        "some text", "some text"
    )
}


@pytest.mark.parametrize(
    "input_text,output_text", examples.values(), ids=examples.keys()
)
def test_examples(input_text, output_text, tmp_path):
    path = tmp_path / "index.ts"
    path.write_text(input_text)
    rename_in_file.perform_renaming(str(path))
    text_after = path.read_text()
    assert text_after == output_text
